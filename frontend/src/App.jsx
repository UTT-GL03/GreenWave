import './App.css'
//import data from './assets/sample_data.json'
import { Link, Routes, Route } from "react-router-dom";
import Detail from './Detail';
import placeholder from './assets/placeholderimg.png';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(dataJson => setData(dataJson))
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {!data ? (
                <p>Loading...</p>
              ) : (
                <div className='list-music'>
                  {data.music.map((music, index) => (
                    <Link key={index} to={`/detail/${index}`}>
                      <article className="music-card">
                        {/* <img src={music.picture} alt={music.title}/> */}
                        <img src={placeholder} alt={music.title} />
                        <p>{music.title}</p>
                        <p>
                          {data.artist[music.artist]
                            ? `${data.artist[music.artist].firstName} ${data.artist[music.artist].lastName}`
                            : "Unknown artist"}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          }
        />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App
