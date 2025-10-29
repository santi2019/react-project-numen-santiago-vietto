import React,  { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider';

const Product = ({product, addToCart}) => {

  const {price, size, name, image, id} = product;
   const { openModal } = useContext(ShoppingCartContext);

  return (
    <div className="product">
        <div className="productImgContainer">
          <img src={image} alt=""/>
        </div>
        <div className="productContent">
            <h3>£{price}</h3>
            <h4>{name}</h4>
            <span>Original</span>
            <h4>Only size: {size}</h4>
        </div>
        <div className="productBtnContainer">
          <button className="buyBtn" onClick={() => openModal(id)}>Buy</button>
        </div>
    </div>
  )
}

export default Product