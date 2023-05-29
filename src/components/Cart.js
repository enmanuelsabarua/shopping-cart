import '../styles/Cart.css';

function Cart({ showCart, handleShowCart }) {
    return (
      <>
        <div className={`black-filter ${showCart && 'show'}`}></div>
        <div className={`cart ${showCart && 'show'}`}>
          <div className="cart-content">
            <h2>Your shopping cart</h2>
            <div className="products"></div>
            <p className="total">Total: $0.00</p>
            <button type="button" className="checkout-btn cart-btn">Checkout</button>
            <button type="button" className="close-btn cart-btn" onClick={handleShowCart}>Close</button>
          </div>
        </div>
      </>
    );
  }
  
  export default Cart;