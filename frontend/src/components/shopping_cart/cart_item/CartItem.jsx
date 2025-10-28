import React from 'react'

const CartItem = ({item, deleteFromCart}) => {

  const {name, price, id, quantity} = item;

  return (
    <div className="cart-item">
        <h4>{name}</h4>
        <h5>$ {price} x {quantity} = {price * quantity}</h5>
        <button onClick={() => deleteFromCart(id)}>ELiminar uno</button>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem