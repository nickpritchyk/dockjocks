import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavPopup from './NavPopup';


function Navbar() {
    const [navPop, setNavPop] = useState(false);

    return(
        <header>
            <nav className="nav">
                <NavLink to="/" id="site-title"> DockJocks </NavLink>
                <ul>
                    <li id="nav-pages">
                        <NavLink to="/about"> About </NavLink>
                    </li>
                    <li id="nav-pages">
                        <NavLink to="/gallery"> Gallery </NavLink>
                    </li>
                </ul>
                <button id="nav-btn" onClick={() => setNavPop(true)}> = </button>
            </nav>
            { navPop && <NavPopup setNavPop={ setNavPop }/> }
        </header>
    );
}

export default Navbar;