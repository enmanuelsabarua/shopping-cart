import Product from "./Product";
import images from "../imgs";
import uniqid from 'uniqid';
import '../styles/Catalog.css';
import Footer from "./Footer";

function Catalog() {
    return (
      <div className="catalog">
        <div className="container">
          {images.map(laptop => <Product key={uniqid()} name={laptop.name} price={laptop.price} />)}
        </div>

        <Footer color={'black'} />
      </div>
    );
  }
  
  export default Catalog;