import './Detail.css'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { usePlayer } from "./PlayerContext";
//import data from './assets/sample_data.json'
import dayjs from 'dayjs';
import placeholder from './assets/placeholderimg.png';

function Detail() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const { playMusic } = usePlayer();

    useEffect(() => {
        fetch('/sample_data.json')
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(dataJson => setData(dataJson))
            .catch(err => console.error("Erreur de chargement :", err));
    }, []);

    // 👉 Attendre que le JSON soit chargé avant d'accéder à "music"
    if (!data) return <p>Loading...</p>;

    const music = data.music[id];

    // 👉 Vérifie si la musique existe
    if (!music) return <p>This music was not found 😢</p>;

    const handlePlay = () => {
        playMusic(music);
    };

    return (
        <div className="music-detail">
            <h2>{music.title}</h2>
            <img src={placeholder} alt={music.title} />
            <p>Released on : {dayjs(music.publication).format('DD MMMM YYYY')}</p>
            <p>
                {data.artist[music.artist]
                    ? data.artist[music.artist].firstName + " " + data.artist[music.artist].lastName
                    : "Artiste inconnu"}
            </p>
            <p>Album: {data.list[music.album]?.title || "Unknown album"}</p>
            <p>Type of music: {music.type}</p>

            <button onClick={handlePlay}>▶️ Play this song</button>
        </div>
    );
}

export default Detail;
