
import "./404.css"
import { NavLink } from "react-router-dom"
export default function Feil() {
    return (
        
            <div className='container'>
                <div className='child'>
                    <h1> 404</h1>
                    <p>Denne siden finnes ikke eller er slettet</p>
                    <NavLink to="/"><button className="button">take me home</button></NavLink>
                </div>
            </div>
      
    )
  }