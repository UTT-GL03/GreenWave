import './Detail.css'
import { useParams } from "react-router-dom";
import data from './assets/sample_data.json'
import dayjs from 'dayjs'

function Detail() {
    const { id } = useParams();
    const music = data.music[id];

    if (!music) return <p>This music was not found :sad:</p>;

    return (
        <div className="music-detail">
            <h2>{music.title}</h2>
            <img src={music.picture} alt={music.title} />
            <p>Released on : {dayjs(music.publication).format('DD MMMM YYYY')}</p>
            <p>
                {data.artist[music.artist]
                ? data.artist[music.artist].firstName + " " + data.artist[music.artist].lastName
                : "Artiste inconnu"}
            </p>
            <p>Album: {data.list[music.album].title}</p>
            <p>Type of music: {music.type}</p>
        </div>
    );
}

export default Detail;
