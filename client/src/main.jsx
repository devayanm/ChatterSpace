import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/chatterspace-sw.js")
      .then((reg) => console.log("ChatterSpace Service Worker registered", reg))
      .catch((err) => console.error("ChatterSpace Service Worker failed", err));
  });
}