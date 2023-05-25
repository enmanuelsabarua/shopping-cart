import { Link } from "react-router-dom";
import Cart from "./Cart";

function NavBar() {
    return (
      <nav>
        <ul>
            <li><Link to="/">Website Name</Link></li>
            <li><Link to="/catalog">Shop</Link></li>
            <li><Link><Cart /></Link></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;