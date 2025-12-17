import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import placeholder from "./assets/placeholderimg.png";
import "./SearchResults.css"
import { Link, Routes, Route } from "react-router-dom";

function SearchResults() {

    const { query } = useParams();
    const [musics, setMusics] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch("http://localhost:5984/greenwavedb/_find", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    selector: {
                        title: {
                            "$gte": query,
                            "$lte": query + "\ufff0"
                        }
                    },
                    sort: [{ title: "asc" }],
                    limit: 50
                })
            });

            const data = await res.json();
            setMusics(data.docs);

            // load artists
            for (const m of data.docs) {
                const artist = await fetch(`http://localhost:5984/greenwavedb/${m.artist}`)
                    .then(r => r.json());
                setArtists(prev => ({ ...prev, [artist._id]: artist }));
            }
        };

        fetchData();

    }, [query]);

    return (
        <>
            <h2>Résultats pour “{query}”</h2>
            <div className="list-music">


                {musics.map(music => {
                    const artist = artists[music.artist];

                    return (
                        <Link key={music._id} to={`/detail/${music._id}`}>
                            <article key={music._id} className="music-card">
                                <img src={placeholder} alt={music.title} />
                                <p>{music.title.charAt(0).toUpperCase() + music.title.slice(1)}</p>
                                <p>
                                    {artist
                                        ? `${artist.firstName} ${artist.lastName}`
                                        : "Unknown"}
                                </p>
                            </article>
                        </Link>
                    );
                })}

                {musics.length === 0 && (
                    <p>Aucun résultat.</p>
                )}
            </div>
        </>
    );
}

export default SearchResults;
