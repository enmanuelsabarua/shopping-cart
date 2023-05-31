import '../styles/Product.css';

function Product({ id, name, price, setCartProducts, setTotal , total }) {
    const handleAddCart = () => {
      setCartProducts(prevState => {
        return [...prevState, { id, name, totalPrice: price, amount: 1, basePrice: price}]
      })

      setTotal(total + price);

    } 

    return (
      <div className="card">
        <div className="laptop-img">
          <img src={`./imgs/${name}.webp`} alt="Laptop" />
        </div>
        <div>
          <p className="laptop-name">{name.split('-').join(' ')}</p>
          <p className="laptop-price">${price}</p>
        </div>
        <button className='laptop-btn' type='button' onClick={handleAddCart}>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;