import { Link } from "react-router-dom";
import Product from "./Product";


function Catalog({ category = 'All Products'}) {
    return (
      <div>
        <h1>Shop / {category}</h1>
        <ul>
          <li><Link to="/catalog/processors">Processors</Link></li>
          <li><Link to="/catalog/memory">Memory</Link></li>
          <li><Link to="/catalog/motherboards">Motherboards</Link></li>
          <li><Link to="/catalog/video-cards">Video Cards</Link></li>
          <li><Link to="/catalog/chassis">Chassis</Link></li>
        </ul>
        <Link to="/product/id"><Product /></Link>
        
      </div>
    );
  }
  
  export default Catalog;