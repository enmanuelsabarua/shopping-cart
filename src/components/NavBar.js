import { Link } from "react-router-dom";
import Cart from "./Cart";
import '../styles/NavBar.css';
import { useState } from "react";

function NavBar() {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
      showCart ? setShowCart(false) : setShowCart(true);
    }

    return (
      <nav className="navbar">
        <ul className="container">
            <li ><Link className="website-title" to="/">LapBottom</Link></li>
            <div className="links">
              <li className="link"><Link className="home-link link" to="/">Home</Link></li>
              <li className="link"><Link className="laptops-link link" to="/catalog">Laptops</Link></li>
              <li className="link"><Link className="contact-link link" to="/contact">Contact</Link></li>
              <li className="link cart-icon" onClick={handleShowCart}><Link className="link"><i className="fa-solid fa-cart-shopping"></i></Link></li>
              <Cart showCart={showCart} handleShowCart={handleShowCart} />              
            </div>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;