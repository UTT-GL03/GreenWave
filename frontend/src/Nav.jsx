import './Nav.css'
import placeholder from './assets/placeholderimg.png'
import { Link } from "react-router-dom";

function Nav() {
  return (
      <header>
        <nav className=''>
          <Link to="/" className=''>
            <div>
              <img src={placeholder} className="placeholder" />
              <p>GreenWave</p>
            </div>
          </Link>
          <input type='text' />
          <a href=''>Compte</a>
        </nav>
      </header>
  )
}

export default Nav
