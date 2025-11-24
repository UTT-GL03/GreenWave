import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import placeholder from './assets/placeholderimg.png';
import { useEffect, useState } from 'react';

function App() {

  const [musics, setMusics] = useState(null);
  const [artists, setArtists] = useState({});

  useEffect(() => {

    fetch('http://localhost:5984/greenwavedb/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { type: "music" },
        sort: [{ publication: "desc" }],
        limit: 20
      })
    })
      .then(res => res.json())
      .then(async (result) => {

        const musics = result.docs;
        setMusics(musics);

        const artistIds = [...new Set(musics.map(m => m.artist))];

        const artistPromises = artistIds.map(id =>
          fetch(`http://localhost:5984/greenwavedb/${id}`).then(r => r.json())
        );

        const fetchedArtists = await Promise.all(artistPromises);

        const artistMap = {};
        fetchedArtists.forEach(a => artistMap[a._id] = a);

        setArtists(artistMap);
      })
      .catch(err => console.error("Erreur CouchDB :", err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            {!musics ? (
              <p>Loading...</p>
            ) : (
              <div className='list-music'>
                {musics.map((music) => {
                  const artist = artists[music.artist];

                  return (
                    <Link key={music._id} to={`/detail/${music._id}`}>
                      <article className="music-card">
                        <img src={placeholder} alt={music.title} />
                        <p>{music.title}</p>
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
            )}
          </>
        } />

        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </>
  );
}

export default App;
