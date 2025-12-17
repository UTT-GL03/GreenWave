import { Link, useNavigate, useLocation } from "react-router-dom";
import placeholder from './assets/placeholderimg.png'
import { useState, useEffect } from "react";
import './Nav.css';

function Nav() {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search/${query.toLowerCase()}`);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search/${query.toLowerCase()}`);
    }
  };

  useEffect(() => {
    setQuery("");
  }, [location.pathname]);

  return (
    <header>
      <nav>
        <Link to="/">
          <div>
            <img src={placeholder} className="placeholder" alt='placeholder' />
            <p>GreenWave</p>
          </div>
        </Link>

        <input
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSearch}>Rechercher</button>

        <Link to="/favorites">Favoris</Link>
        <a href="">Compte</a>

      </nav>
    </header>
  );
}

export default Nav;
