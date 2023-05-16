import { NavLink, Link } from 'react-router-dom';
import "../styles/NavPopup.css";

export default function NavPopup() {
    return(
        <div className="popup">
            <nav>
                <ul>
                    <li> About </li>
                    <li> Gallery</li>
                </ul>
            </nav>
        </div>
    )
}