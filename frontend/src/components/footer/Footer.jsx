import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faPinterest, faSquareFacebook, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerMemberContainer">
          <h3>BECOME A MEMBER AND EARN 250 POINTS TO SPEND ON REWARDS</h3>
          <button>SIGN UP FOR FREE <FontAwesomeIcon icon={faArrowRight} className="footerTitleIcon"/></button>
        </div>
        <div className="footerContent">
          <div>
            <h3>SUPPORT</h3>
            <ul>
              <li>Help</li>
              <li>Returnds & Refaunds</li>
              <li>Delivery</li>
              <li>Student discount</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3>COMPANY INFO</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Mobile Apps</li>
              <li>adiclub</li>
            </ul>
          </div>
          <div>
            <h3>FOLLOW US</h3>
            <ul>
              <li className="footerIcon"><FontAwesomeIcon icon={faSquareFacebook} /></li>
              <li className="footerIcon"><FontAwesomeIcon icon={faInstagram} /></li>
              <li className="footerIcon"><FontAwesomeIcon icon={faXTwitter} /></li>
              <li className="footerIcon"><FontAwesomeIcon icon={faPinterest} /></li>
              <li className="footerIcon"><FontAwesomeIcon icon={faTiktok} /></li>
              <li className="footerIcon"><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </div>
        </div>
        <div className="footeCR">
          <p>© 2025 Adidas UK. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
