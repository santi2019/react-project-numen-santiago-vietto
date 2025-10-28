import React from 'react'

const Product = ({product, addToCart}) => {

  const {price, size, name, image, id} = product;

  return (
    <div className="product">
        <div className="productImgContainer">
          <img src={image} alt=""/>
        </div>
        <div className="productContent">
            <h4>{name}</h4>
            <h5>£{price}</h5>
            <span>Original</span>
            <span>Only size: {size}</span>
        </div>
        <div className="productBtnContainer">
          <button className="productBtn" onClick={() => addToCart(id)}>Buy</button>
        </div>
    </div>
  )
}

export default Product