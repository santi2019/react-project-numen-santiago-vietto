import React, { useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider';

const Navbar = ({adVisible}) => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("navbarResponsive")
    }

    const { totalItemsInCart } = useContext(ShoppingCartContext);

  return (
    <>
        <nav className={`navbarContainer ${adVisible ? "withAd" : ""}`}>
            <button className="navbarOpenBtn" onClick={showNavbar}><FontAwesomeIcon icon={faBars}/></button>
            <img src="/adidasLogo.png" alt="" className="navbarLogo"/>
            <ul className="navbarMenu" ref={navRef}>
                <li className="menuItemBold">MEN</li>
                <li className="menuItemBold">WOMEN</li>
                <li className="menuItemBold">KIDS</li>
                <li>SHOES</li>
                <li>SPORTS</li>
                <li className="menuItemBold">OUTLET</li>
                <button className="navbarCloseBtn" onClick={showNavbar}><FontAwesomeIcon icon={faXmark}/></button>
            </ul>
            <div className="navbarFunctions">
                <div className="searchBarContainer">
                    <input type="text" placeholder="Search" className="searchBar" />
                       <FontAwesomeIcon
                            className="navbarIcons"
                            icon={faMagnifyingGlass}
                        />
                </div>
                <FontAwesomeIcon
                    className="navbarIcons"
                    icon={faUser}
                />
                <div className="navbarCartWrapper">
                    <FontAwesomeIcon 
                        className="navbarIcons"
                        icon={faBagShopping} 
                    />
                    <span className="navbarCartBadge">{totalItemsInCart}</span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
