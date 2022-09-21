import { NavLink } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
    return (
        <div>
        <ul>
        <NavLink to="dsfnjv"><li><a href="">Bilder</a></li></NavLink>
        <NavLink to="/om"><li><a >Om oss</a></li></NavLink>
        <NavLink to="/"><li><a>Hjem</a></li></NavLink>
     
      </ul>
      </div>
    )
  }
