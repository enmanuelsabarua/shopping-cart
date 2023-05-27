import { Link } from "react-router-dom";
import Cart from "./Cart";
import '../styles/NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <ul className="container">
            <li ><Link className="website-title" to="/shopping-cart">LapBottom</Link></li>
            <div className="links">
              <li><Link className="home-link link" to="/shopping-cart">Home</Link></li>
              <li><Link className="laptops-link link" to="/catalog">Laptops</Link></li>
              <li><Link className="contact-link link" to="/contact">Contact</Link></li>
              <li><Link className="link"><Cart /></Link></li>
            </div>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;