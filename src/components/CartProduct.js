import '../styles/CartProduct.css';

function CartProduct({ id, name, price, amount, setCartProducts, cartProducts, setTotal, total }) {

    function handleAmount(e) {
        const newCartProducts = cartProducts.filter(product => {
            // Fixed reduce product cart


            if(product.id === e.target.id) {

                if (e.target.innerText === '-' && product.totalPrice - product.basePrice === 0) {
                    setTotal(total - product.totalPrice);
                    return null;
                }
                
                if (e.target.innerText === '+') {
                    setTotal(total + product.basePrice);
                    return {name: product.name, amount: product.amount++, price: (product.totalPrice += product.basePrice) };
                } else if (e.target.innerText === '-') {
                    setTotal(total - product.basePrice);
                    return {name: product.name, amount: product.amount--, price: (product.totalPrice -= product.basePrice) };
                }
                
            }

            return product;
        });

        setCartProducts(newCartProducts);
    }

    return (
      <div className="cart-product">
        <img src={`./imgs/${name}.webp`} alt="Laptop" />
        <div className="cart-product-info">
            <h3>{name.split('-').join(' ')}</h3>
            <p>${price.toFixed(2)}</p>

            <div className="products-btns">
                <button id={id} type='button' onClick={(e) => handleAmount(e)}>-</button>
                <p>{amount}</p>
                <button id={id} type='button' onClick={(e) => handleAmount(e)}>+</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default CartProduct;