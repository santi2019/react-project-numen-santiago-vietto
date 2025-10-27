import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = ({adVisible}) => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("navbarResponsive")
    }

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
                <FontAwesomeIcon 
                    className="navbarIcons"
                    icon={faBagShopping} 
                />
            </div>
        </nav>
    </>
  )
}

export default Navbar
