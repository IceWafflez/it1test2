import './navbar.scss';
import { NavLink } from 'react-router-dom';

import arbeid from '../images/arbeid.gif'

export default function About() {
    return (
        <div>
            <h1>under arbeid</h1>
            {/*<NavLink to="/">til hjem </NavLink>*/}
            <img src={arbeid}></img>
      </div>
    )
  }