import React, { useContext } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCartContextProvider";
import CartItem from "./cart_item/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartModal = () => {

  const {
    state: { cart },
    cartModalOpen,
    closeCartModal,
    clearCart,
    cartTotal,
  } = useContext(ShoppingCartContext);

  if (!cartModalOpen) return null;

  return (
    <div className="cartModalContainer">
      <div className="cartModalContent">
        <div className="cartModalHeader">
          <h3>Your bag</h3>
          <FontAwesomeIcon
                className="cartCloseIcon"
                icon={faXmark}
                onClick={closeCartModal}
          />
        </div>

        <div className="cartModalBody">
          {cart.length === 0 ? (
            <p>Your bag is empty.</p>
          ) : (
            cart.map(item => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <div className="cartModalFooter">
          <div className="cartTotalLine">
            <span>Total</span>
            <span>£{cartTotal}</span>
          </div>
          <div className="cartModalButtons">
            <button className="confirmBtn" onClick={clearCart} disabled={!cart.length}>
              Clean Cart
            </button>
            <button className="cancelBtn" onClick={closeCartModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
