
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h6>Airline Booking</h6>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
       
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
