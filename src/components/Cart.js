import '../styles/Cart.css';
import CartProduct from './CartProduct';
import uniqid from 'uniqid';

function Cart({ showCart, handleShowCart, cartProducts, total, setCartProducts, setTotal }) {
    return (
      <>
        <div className={`black-filter ${showCart && 'show'}`}></div>
        <div className={`cart ${showCart && 'show'}`}>
          <div className="cart-content">
            <h2>Your shopping cart</h2>

            <div className="products">
              {cartProducts.map(product => <CartProduct cartProducts={cartProducts} key={uniqid()} id={product.id} name={product.name} price={product.totalPrice} amount={product.amount} setCartProducts={setCartProducts} setTotal={setTotal} total={total} />)}
            </div>

            <p className="total">Total: ${total.toFixed(2)}</p>
            <button type="button" className="checkout-btn cart-btn">Checkout</button>
            <button type="button" className="close-btn cart-btn" onClick={handleShowCart}>Close</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Cart;