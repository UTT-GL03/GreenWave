import { useState, useEffect } from "react";
import "./Player.css";
import { usePlayer } from "./PlayerContext";

// Resolve audio source URL
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

  // Access global player context
  const { currentMusic, isPlaying, setIsPlaying, audioRef } = usePlayer();

  // Local states
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [loadError, setLoadError] = useState(null);
  const [artist, setArtist] = useState(null);

  // Fetch artist whenever the current music changes
  useEffect(() => {
    if (!currentMusic) {
      setArtist(null);
      return;
    }

    fetch(`http://localhost:5984/greenwavedb/${currentMusic.artist}`)
      .then(res => res.json())
      .then(setArtist)
      .catch(err => console.error("CouchDB error:", err));

  }, [currentMusic]);

  // Set audio source and autoplay if needed
  useEffect(() => {
    if (!audioRef.current || !currentMusic) return;

    audioRef.current.src = resolveAudioSrc(currentMusic.audio);
    audioRef.current.load();
    if (isPlaying) audioRef.current.play().catch(() => setIsPlaying(false));
  }, [currentMusic, isPlaying]);

  // Update CSS variable for progress bar
  useEffect(() => {
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  }, [progress]);

  // Toggle play/pause
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

  // Update progress based on audio playback
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  // Seek audio position by clicking progress bar
  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime =
      Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) *
      audio.duration;
  };

  // Adjust volume
  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  // If no music selected, show placeholder
  if (!currentMusic)
    return (
      <footer className="player">
        <p style={{ color: "white", padding: "1rem" }}>No song selected</p>
      </footer>
    );

  return (
    <>
      <footer className="player">
        {/* Left section: album art and title */}
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

        {/* Center section: controls and progress bar */}
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

        {/* Right section: volume control */}
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

        {/* Hidden audio element for playback */}
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </footer>
    </>
  );
}
