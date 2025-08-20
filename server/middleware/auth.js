const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    let token;

    //check authorization header
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    //check cookie
    else if(req.cookies?.token){
        token = req.cookies.token;
    }

    if(!token){
        return res.status(401).json({message: 'Unauthorized. Please login again.'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        if (err.name === "TokenExpiredError") {
            return res
                .status(401)
                .json({ error: "Session expired. Please log in again." });
        }
        return res.status(401).json({ error: "Invalid token." });
    }
};

module.exports = auth;