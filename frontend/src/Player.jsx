import { useState, useEffect } from "react";
import "./Player.css";
import { usePlayer } from "./PlayerContext";

const resolveAudioSrc = (src) => {
  if (!src) return "";
  if (src.startsWith("/") || src.startsWith("http")) return src;
  try {
    return new URL(src, import.meta.url).href;
  } catch {
    return src;
  }
};

export default function Player() {

  const { currentMusic, isPlaying, setIsPlaying, audioRef } = usePlayer();
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [loadError, setLoadError] = useState(null);
  const [artist, setArtist] = useState(null)

  console.log(artist)

  useEffect(() => {
    if (!currentMusic) {
      setArtist(null);
      return;
    }

    fetch(`http://localhost:5984/greenwavedb/${currentMusic.artist}`)
      .then(res => res.json())
      .then(setArtist)
      .catch(err => console.error("Erreur CouchDB :", err));

  }, [currentMusic]);

  console.log(artist)

  useEffect(() => {
    if (!audioRef.current || !currentMusic) return;

    audioRef.current.src = resolveAudioSrc(currentMusic.audio);
    audioRef.current.load();
    if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
  }, [currentMusic, isPlaying]);

  useEffect(() => {
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  }, [progress]);

  const togglePlay = async () => {
    if (!audioRef.current) return setLoadError("No audio element");
    setLoadError(null);

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        return;
      }
      if (!audioRef.current.src) return setLoadError("Audio file not found");

      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setLoadError("Playback failed");
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime =
      Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) *
      audio.duration;
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  if (!currentMusic)
    return (
      <footer className="player">
        <p style={{ color: "white", padding: "1rem" }}>No song selected</p>
      </footer>
    );

  return (
    <>
      <footer className="player">
        <div className="player-left">
          <img src={currentMusic.picture} alt={currentMusic.title} />
          <div>
            <p className="title">{currentMusic.title || "—"}</p>

            <p className="artist">
              {artist
                ? `${artist.firstName} ${artist.lastName}`
                : "Unknown artist"}
            </p>
          </div>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</button>

            <div
              className="progress-bar"
              onClick={handleSeek}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
            >
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {loadError && <div className="load-error">{loadError}</div>}
        </div>

        <div className="player-right">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </footer>
    </>
  );
}
