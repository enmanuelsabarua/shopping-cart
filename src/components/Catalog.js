import { Link } from "react-router-dom";
import Product from "./Product";


function Catalog() {
    return (
      <div>
        <Link to="/product"><Product /></Link>
      </div>
    );
  }
  
  export default Catalog;