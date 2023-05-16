import { NavLink } from 'react-router-dom';
import "../styles/NavPopup.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function NavPopup({setNavPop}) {
    return(
        <div className="popup">
            <div className="close-btn">
                <button onClick={()=> {
                    setNavPop(false);
                }}>
                    <KeyboardDoubleArrowRightIcon style={{fontSize: 'larger'}} />
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