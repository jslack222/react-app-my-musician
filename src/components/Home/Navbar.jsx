import React from 'react'; 
import userIcon from "../../assets/img/userIcon.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/home">
              <img className="navbar" src={userIcon} alt="home-icon" />
            </Link>
          </li>
          <li>
            <Link to="">Friends</Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </nav>
    );
}
export default Navbar; 