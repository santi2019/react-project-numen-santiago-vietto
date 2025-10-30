import React from 'react'
import ShoppingCart from './shopping_cart/ShoppingCart'
import Carousel from './carousel/Carousel'

const Main = () => {
  return (
    <>
        <ShoppingCart/>
        <div className="mainContainer">
          <div className="mainClotheImgContainer">
              <img src="https://oasisinet.com/wp-content/uploads/2025/06/ADIDAS_ORIGINALS_X_OASIS_PLP_INTRO_BANNER_DESKTOP_2880X800-1024x284.jpg" alt="" className="mainClotheImg" />
          </div>
          <div className="mainVideoTextContainer">
            <div className="mainTextContainer">
                <h2>ORIGINAL FOREVER</h2>
                <p>
                  After over 30 years of shared history and era-defining looks, adidas and Oasis have announced their new 
                  ‘Original Forever’ campaign and exclusive Oasis Live ‘25 apparel collection.
                </p>
                <p>
                  The adidas Originals x Oasis Live ‘25 collection features a co-branded 26-piece range of timeless adidas 
                  staples in various colours. The collection includes Firebird tracksuits (a favourite of Noel’s), raglan 
                  sleeve jerseys (iconically worn by Liam in a 90’s charity football match), bucket hats and coach jackets. 
                </p>
            </div>
            <div className="mainVideoContainer">
              <iframe
                src="https://www.youtube.com/embed/N3r7c0OH9og?start=2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mainVideo"
              ></iframe>
            </div>
          </div>
          <div className="mainOasisQuoteContainer">
            <h3>"This is it. This is happening"</h3>
            <h4> Oasis Live ’25</h4>
          </div>
          <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/ADIDAS_ORIGINALS_X_OASIS_CITATION_STATEMENT_DESKTOP_2880x1240_ae8a3df236.jpg" alt="" className="mainOasisImg"/>
        </div>
        <Carousel/>
    </>
  )
}

export default Main
