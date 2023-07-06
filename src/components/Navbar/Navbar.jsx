import { Link } from "react-router-dom";
import logo_icon from "../../assets/logo_icon.png";
import home_icon from "../../assets/home_icon.png";
import contact_icon from "../../assets/contact_icon.png";
import "./Navbar.css";


function Nav() {
  return (
    <nav>
      <ul className="nav_list">
        <li>
          <img className="logo_icon" src={logo_icon} alt="Icon du site" />
        </li>
        <li>
          <Link to="/">
            <img className="home_icon" src={home_icon} alt="Icon d'une maison" />
          </Link>
        </li>
        <li>
          <a href="mailto:thomaspc@hotmail.fr">
            <img className="contact_icon" src={contact_icon} alt="Icon de contact" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;