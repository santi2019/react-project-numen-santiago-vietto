import React, { useContext } from 'react'
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider'
import Product from './product/Product';

const ShoppingCart = () => {

  const {state, addToCart} = useContext(ShoppingCartContext);

  const {products} = state;

  return (
    <>
        <div className="cartContainer">
            <div className="cartTitleContainer">
                <h2>Slide away into your style</h2>
            </div>
            <div className="productsContainer">
                { products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </div>      
          </div>
    </>
  )
}

export default ShoppingCart
