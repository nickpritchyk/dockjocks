import { NavLink } from 'react-router-dom';
import "../styles/NavPopup.css";

export default function NavPopup({setNavPop}) {
    return(
        <div className="popup">
            <div className="close-btn">
                <button onClick={()=> {
                    setNavPop(false);
                }}>
                    x
                </button>
            </div>
            <nav className='nav-pop'>
                <ul>
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