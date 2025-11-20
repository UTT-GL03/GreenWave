import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import placeholder from './assets/placeholderimg.png';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);

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

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            {!data ? (
              <p>Loading...</p>
            ) : (
              <div className='list-music'>
                {data.music.map((music) => {
                  const artist = data.artist.find(a => a._id === music.artist);

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
