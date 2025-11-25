import './Detail.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { usePlayer } from "./PlayerContext";
import dayjs from 'dayjs';
import placeholder from './assets/placeholderimg.png';

function Detail() {

  // Local states for the music with its artist and album
  const [music, setMusic] = useState(null);
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);

  // Get the music ID from the URL
  const { id } = useParams();

  // Access the global player context
  const { playMusic } = usePlayer();

  useEffect(() => {

    // Fetch the music document by ID
    fetch(`http://localhost:5984/greenwavedb/${id}`)
      .then(res => res.json())
      .then(musicDoc => {
        setMusic(musicDoc);

        // Fetch artist document
        fetch(`http://localhost:5984/greenwavedb/${musicDoc.artist}`)
          .then(res => res.json())
          .then(setArtist);

        // Fetch album document
        fetch(`http://localhost:5984/greenwavedb/${musicDoc.album}`)
          .then(res => res.json())
          .then(setAlbum);
      })
      .catch(err => console.error("CouchDB error:", err));

  }, [id]); // Rerun when ID changes

  // Show loading state until the main document is fetched
  if (!music) return <p>Loading...</p>;

  // Call the global player to play this track
  const handlePlay = () => playMusic(music);

  return (
    <div className="music-detail">

      <h2>{music.title}</h2>
      <img src={placeholder} alt={music.title} />

      {/* Display formatted publication date */}
      <p>Released on: {dayjs(music.publication).format('DD MMMM YYYY')}</p>

      {/* Display artist name if available */}
      <p>
        {artist
          ? artist.firstName + " " + artist.lastName
          : "Unknown artist"}
      </p>

      {/* Display album title if available */}
      <p>Album: {album?.title || "Unknown album"}</p>

      <p>Type of music: {music.musicType}</p>

      {/* Play button */}
      <button onClick={handlePlay}>▶️ Play this song</button>

    </div>
  );
}

export default Detail;
