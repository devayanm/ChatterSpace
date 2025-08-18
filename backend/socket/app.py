from typing import List
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, Response
from fastapi import FastAPI, WebSocket, Request, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

app = FastAPI()
templates = Jinja2Templates(directory="frontend/pages")

# Mount static files
app.mount("/pages", StaticFiles(directory="frontend/pages"), name="pages")

class ConnectionManager:
    #initialize list for websockets connections and user tracking
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.client_usernames: dict = {}  # client_id -> username
        self.message_history: List[dict] = []  # store message history
        self.active_sessions: set = set()  # track active user sessions by username
        self.websocket_to_client: dict = {}  # websocket -> client_id mapping

    #accept and append the connection to the list
    async def connect(self, websocket: WebSocket, client_id: int, username: str):
        await websocket.accept()
        
        # Check if user is already connected (for refresh scenarios)
        is_reconnect = client_id in self.client_usernames
        
        self.active_connections.append(websocket)
        self.client_usernames[client_id] = username
        
        # Send message history to the user
        for msg in self.message_history[-20:]:  # Send last 20 messages
            await websocket.send_text(f"HISTORY:{msg['type']}:{msg['message']}")
        
        # Only send join message if this is a new connection (not a refresh)
        if not is_reconnect:
            join_msg = f"{username} joined the neural network"
            self.message_history.append({"message": join_msg, "type": "system"})
            
            # Send join message to all users
            for connection in self.active_connections:
                await connection.send_text(f"SYSTEM:{join_msg}")

    #remove the connection from list
    async def disconnect(self, websocket: WebSocket, client_id: int):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
        
        username = self.client_usernames.get(client_id, f"Client #{client_id}")
        if client_id in self.client_usernames:
            del self.client_usernames[client_id]
        
        # Send disconnect message to remaining users
        disconnect_msg = f"{username} left the neural network"
        self.message_history.append({"message": disconnect_msg, "type": "system"})
        await self.broadcast_system(disconnect_msg)

    #send personal message to the connection
    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)
        
    #send message to the list of connections (exclude sender)
    async def broadcast(self, message: str, websocket: WebSocket, client_id: int):
        username = self.client_usernames.get(client_id, f"Client #{client_id}")
        broadcast_msg = f"{username}: {message}"
        
        # Don't store here - it's already stored in the WebSocket endpoint
        
        for connection in self.active_connections:
            if(connection == websocket):
                continue
            await connection.send_text(broadcast_msg)
    
    #send system message to all connections
    async def broadcast_system(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(f"SYSTEM:{message}")

# instance for hndling and dealing with the websocket connections
connectionmanager = ConnectionManager()

@app.get("/favicon.ico")
async def favicon():
    return Response(status_code=204)  # No Content

@app.get("/", response_class=HTMLResponse)
def read_index(request: Request):
    # Render the HTML template
    return templates.TemplateResponse("index.html", {"request" : request})

@app.websocket("/ws/{client_id}/{username}")
async def websocket_endpoint(websocket: WebSocket, client_id: int, username: str):
    #accept connections 
    await connectionmanager.connect(websocket, client_id, username)
    try:
        while True:
            #receive text from the user
            data = await websocket.receive_text()
            
            # Store and send user's own message
            user_msg = f"{username}: {data}"
            connectionmanager.message_history.append({"message": user_msg, "type": "user"})
            await connectionmanager.send_personal_message(f"You: {data}", websocket)
            
            #broadcast message to other connected users (this will store in history)
            await connectionmanager.broadcast(data, websocket, client_id)
            
    #WebSocketDisconnect exception will be raised when client is disconnected
    except WebSocketDisconnect:
        await connectionmanager.disconnect(websocket, client_id)
