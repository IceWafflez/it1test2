import { NavLink } from 'react-router-dom';
import './navbar.scss';
export default function Navbar() {
    return (
        <div>
        <ul>
        <NavLink to="/login"><li><a>Login</a></li></NavLink>
  
        <NavLink to="dsfnjv"><li><a>Bilder</a></li></NavLink>
        <NavLink to="/om"><li><a >Om oss</a></li></NavLink>
        <NavLink to="/"><li><a>Hjem</a></li></NavLink>
     
      </ul>
      </div>
    )
  }
