import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Ad = ({onClose}) => {

  return (
    <>
        <div className="adContainer">
            <div></div>
            <h3 className="adText">Free standard delivery with adiClub.</h3>
            <FontAwesomeIcon
                className="adCloseIcon"
                icon={faXmark}
                onClick={onClose}
            />
        </div>
    </>
  )
}

export default Ad
