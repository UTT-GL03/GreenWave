import { createContext, useContext, useState, useRef } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const audioRef = useRef(null);
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = (music) => {
    setCurrentMusic(music);
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider
      value={{ audioRef, currentMusic, setCurrentMusic, isPlaying, setIsPlaying, playMusic }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
