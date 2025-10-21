import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import '@picocss/pico/css/pico.css'
import Nav from './Nav.jsx';
import { PlayerProvider } from "./PlayerContext.jsx";
import Player from "./Player.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PlayerProvider>
      <Nav />
      <App />
      <Player />
    </PlayerProvider>
  </BrowserRouter>
);
