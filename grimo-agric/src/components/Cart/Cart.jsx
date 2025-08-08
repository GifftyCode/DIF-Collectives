import React from "react";
import "./Cart.scss";
import { useAppContext } from "../../context/AppContext";

const Cart = () => {
  const { state, dispatch, actionTypes } = useAppContext();

  const updateQuantity = (id, newQuantity) => {
    dispatch({
      type: actionTypes.UPDATE_CART_QUANTITY,
      payload: { id, quantity: newQuantity },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  const closeCart = () => {
    dispatch({ type: actionTypes.TOGGLE_CART });
  };

  if (!state.isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart__header">
          <h3 className="cart__title">Shopping Cart</h3>
          <button className="cart__close" onClick={closeCart}>
            ×
          </button>
        </div>

        <div className="cart__content">
          {state.cart.length === 0 ? (
            <div className="cart__empty">
              <p>Your cart is empty</p>
              <button className="cart__continue-shopping" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart__items">
                {state.cart.map((item) => (
                  <div key={item.id} className="cart__item">
                    <div className="cart__item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart__item-details">
                      <h4 className="cart__item-name">{item.name}</h4>
                      <p className="cart__item-price">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="cart__item-quantity">
                        <button
                          className="cart__quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="cart__quantity">{item.quantity}</span>
                        <button
                          className="cart__quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="cart__remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="cart__item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart__footer">
                <div className="cart__total">
                  <div className="cart__total-row">
                    <span>Items: {state.cartCount}</span>
                  </div>
                  <div className="cart__total-row cart__total-row--final">
                    <span>Total: ${state.cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart__actions">
                  <button className="cart__clear-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="cart__checkout-btn">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
