import './Detail.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { usePlayer } from "./PlayerContext";
import dayjs from 'dayjs';
import placeholder from './assets/placeholderimg.png';

const USER_ID = "user_2"; // user id HARD CODE

function Detail() {

  const [music, setMusic] = useState(null);
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRev, setFavoriteRev] = useState(null);

  const { id } = useParams();
  const { playMusic } = usePlayer();

  const favoriteId = `favorite:${USER_ID}:${id}`;

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
      });

    // Check if music in user's favorite
    fetch(`http://localhost:5984/greenwavedb/${favoriteId}`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Not favorite");
      })
      .then(doc => {
        setIsFavorite(true);
        setFavoriteRev(doc._rev);
      })
      .catch(() => {
        setIsFavorite(false);
        setFavoriteRev(null);
      });

  }, [id]); // Rerun when ID changes

  // Show loading state until the main document is fetched
  if (!music) return <p>Loading...</p>;

  // Call the global player to play this track
  const handlePlay = () => playMusic(music);

  // Add to favorite
  const addToFavorite = () => {
    fetch(`http://localhost:5984/greenwavedb/${favoriteId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: USER_ID,
        musicId: id
      })
    })
      .then(res => res.json())
      .then(data => {
        setIsFavorite(true);
        setFavoriteRev(data.rev);
      });
  };

  // remove from favorite
  const removeFromFavorite = () => {
    fetch(
      `http://localhost:5984/greenwavedb/${favoriteId}?rev=${favoriteRev}`,
      { method: "DELETE" }
    )
      .then(() => {
        setIsFavorite(false);
        setFavoriteRev(null);
      });
  };

  return (
    <div className="music-detail">

      <h2>{music.title.charAt(0).toUpperCase() + music.title.slice(1)}</h2>
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

      <button
        className={isFavorite ? "favorite-active" : "favorite"}
        onClick={isFavorite ? removeFromFavorite : addToFavorite}
      >
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>

    </div>
  );
}

export default Detail;
