import { createContext, useContext, useState, useRef } from "react";

// Create a context to share player state across components
const PlayerContext = createContext();

// Provider component to wrap the app
export function PlayerProvider({ children }) {
  const audioRef = useRef(null);
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to play a given music track
  const playMusic = (music) => {
    setCurrentMusic(music);
    setIsPlaying(true);
  };

  // Provide all states and functions to child components
  return (
    <PlayerContext.Provider
      value={{ audioRef, currentMusic, setCurrentMusic, isPlaying, setIsPlaying, playMusic }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

// Custom hook to access the player context easily
export const usePlayer = () => useContext(PlayerContext);
