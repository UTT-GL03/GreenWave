import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import placeholder from './assets/placeholderimg.png';
import { useEffect, useState } from 'react';

function App() {

  // State to store music items, their artists, CouchDB bookmark, and loading status
  const [musics, setMusics] = useState([]);
  const [artists, setArtists] = useState({});
  const [bookmark, setBookmark] = useState();
  const [loading, setLoading] = useState(false);

  // Fetch 20 music items from CouchDB (with optional pagination bookmark)
  const loadMore = (requestedBookmark) => {

    setLoading(true); // start loading animation

    fetch('http://localhost:5984/greenwavedb/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { type: "music" },
        sort: [{ publication: "desc" }],
        limit: 20,
        bookmark: requestedBookmark
      })
    })
      .then(res => res.json())
      .then(async (data) => {

        // Append new music items to the existing list
        setMusics(prev => [...prev, ...data.docs]);

        // Fetch each music artist 
        for (const m of data.docs) {
          const a = await fetch(`http://localhost:5984/greenwavedb/${m.artist}`).then(x => x.json());
          setArtists(prev => ({ ...prev, [a._id]: a }));
        }

        // Save CouchDB bookmark for the next page
        setBookmark(data.bookmark);
        setLoading(false);
      });
  }

  // Load the first page on page mount
  useEffect(() => {
    loadMore(null);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
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

            {/* Load more button (pagination) */}
            <button onClick={() => loadMore(bookmark)} disabled={loading} className='load-more-btn'>
              {loading ? "Chargement..." : "Charger plus"}
            </button>
          </>
        } />

        {/* Detail page */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
