import '../styles/Product.css';

function Product({ name, price }) {
    return (
      <div className="card">
        <div className="laptop-img">
          <img src={`./imgs/${name}.webp`} alt="Laptop Img" />
        </div>
        <div>
          <p className="laptop-name">{name.split('-').join(' ')}</p>
          <p className="laptop-price">${price}</p>
        </div>
        <button className='laptop-btn' type='button'>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;