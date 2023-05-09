import "../styles/Navbar.css";
import { NavLink, Link } from 'react-router-dom';


function Navbar() {
    return(
        <header>
            <nav className="nav">
                <Link to="/" className="site-title"> DockJocks </Link>
                <ul>
                    <li>
                        <NavLink to="/rent"> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> Gallery </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;