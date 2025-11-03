import React, { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider';

const CartItem = ({ item }) => {
  const { deleteFromCart } = useContext(ShoppingCartContext);
  const { name, price, id, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{name}</h4>
        <h5>$ {price} x {quantity} = {price * quantity}</h5>
      </div>
      <div className="cart-item-actions">
        <button className="confirmBtn" onClick={() => deleteFromCart(id)}>Remove One</button>
        <button className="cancelBtn" onClick={() => deleteFromCart(id, true)}>Remove All</button>
      </div>
    </div>
  )
}

export default CartItem