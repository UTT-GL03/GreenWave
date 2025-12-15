import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import placeholder from './assets/placeholderimg.png';

const USER_ID = "user_2";

function Favorites() {

  const [musics, setMusics] = useState([]);
  const [artists, setArtists] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Gather favorites music's id 
    fetch(
      `http://localhost:5984/greenwavedb/_design/favorite/_view/favorite?key="${USER_ID}"`
    )
      .then(res => res.json())
      .then(async (data) => {

        const musicIds = data.rows.map(row => row.value._id);

        if (musicIds.length === 0) {
          setLoading(false);
          return;
        }

        // Get docs from favorites music
        const musicDocs = await fetch(
          "http://localhost:5984/greenwavedb/_bulk_get",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              docs: musicIds.map(id => ({ id }))
            })
          }
        ).then(res => res.json());

        const musicsData = musicDocs.results.map(r => r.docs[0].ok);
        setMusics(musicsData);

        // get artists from favorites musics
        for (const m of musicsData) {
          const artist = await fetch(
            `http://localhost:5984/greenwavedb/${m.artist}`
          ).then(res => res.json());

          setArtists(prev => ({ ...prev, [artist._id]: artist }));
        }

        setLoading(false);
      });

  }, []);

  if (loading) return <p>Chargement...</p>;

  if (musics.length === 0) return <p>Aucun favori :(</p>;

  return (
    <div className="list-music">
      {musics.map((music) => {
        const artist = artists[music.artist];

        return (
          <Link key={music._id} to={`/detail/${music._id}`}>
            <article className="music-card">
              <img src={placeholder} alt={music.title} />
              <p>{music.title.charAt(0).toUpperCase() + music.title.slice(1)}</p>
              <p>
                {artist
                  ? `${artist.firstName} ${artist.lastName}`
                  : "Unknown artist"}
              </p>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export default Favorites;
