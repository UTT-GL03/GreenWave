import './Detail.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { usePlayer } from "./PlayerContext";
import dayjs from 'dayjs';
import placeholder from './assets/placeholderimg.png';

function Detail() {

  const [music, setMusic] = useState(null);
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const { id } = useParams();
  const { playMusic } = usePlayer();

  useEffect(() => {

    // 1️⃣ Charger la musique
    fetch(`http://localhost:5984/greenwavedb/${id}`)
      .then(res => res.json())
      .then(musicDoc => {
        setMusic(musicDoc);

        // 2️⃣ Charger artiste
        fetch(`http://localhost:5984/greenwavedb/${musicDoc.artist}`)
          .then(res => res.json())
          .then(setArtist);

        // 3️⃣ Charger album
        fetch(`http://localhost:5984/greenwavedb/${musicDoc.album}`)
          .then(res => res.json())
          .then(setAlbum);
      })
      .catch(err => console.error("Erreur CouchDB :", err));

  }, [id]);

  if (!music) return <p>Loading...</p>;

  const handlePlay = () => playMusic(music);

  return (
    <div className="music-detail">

      <h2>{music.title}</h2>
      <img src={placeholder} alt={music.title} />

      <p>Released on : {dayjs(music.publication).format('DD MMMM YYYY')}</p>

      <p>
        {artist
          ? artist.firstName + " " + artist.lastName
          : "Artiste inconnu"}
      </p>

      <p>Album: {album?.title || "Unknown album"}</p>

      <p>Type of music: {music.musicType}</p>

      <button onClick={handlePlay}>▶️ Play this song</button>

    </div>
  );
}

export default Detail;
