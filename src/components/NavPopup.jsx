import { NavLink } from 'react-router-dom';
import "../styles/NavPopup.css";

export default function NavPopup({setNavPop}) {
    return(
        <div className="popup">
            <button className="close-btn" onClick={()=> {
                setNavPop(false);
            }}>
                x
            </button>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li> 
                        <NavLink to="/about">
                            About
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>  
                    </li>
                </ul>
            </nav>
        </div>
    )
}