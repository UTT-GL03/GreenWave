import './Detail.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { usePlayer } from "./PlayerContext";
import dayjs from 'dayjs';
import placeholder from './assets/placeholderimg.png';

function Detail() {

  const [data, setData] = useState(null);
  const { id } = useParams();
  const { playMusic } = usePlayer();

  useEffect(() => {
    fetch('http://localhost:5984/greenwavedb/_all_docs?include_docs=true')
      .then(res => res.json())
      .then(result => {
        const docs = result.rows.map(row => row.doc);

        setData({
          music: docs.filter(d => d.type === "music"),
          artist: docs.filter(d => d.type === "artist"),
          list: docs.filter(d => d.type === "list")
        });
      })
      .catch(err => console.error("Erreur CouchDB :", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const music = data.music.find(m => m._id === id);
  if (!music) return <p>This music was not found</p>;

  const artist = data.artist.find(a => a._id === music.artist);
  const album = data.list.find(l => l._id === music.album);

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
