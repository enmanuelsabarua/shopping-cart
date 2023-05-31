import Product from "./Product";
import images from "../imgs";
import uniqid from 'uniqid';
import '../styles/Catalog.css';
import Footer from "./Footer";

function Catalog({ setCartProducts, setTotal, total }) {
    return (
      <div className="catalog">
        <div className="container">
          {images.map(laptop => {
            const id = uniqid();
            return <Product key={id} id={id} name={laptop.name} price={laptop.price} setCartProducts={setCartProducts} setTotal={setTotal} total={total} />
          })}
        </div>

        <Footer color={'black'} />
      </div>
    );
  }
  
  export default Catalog;