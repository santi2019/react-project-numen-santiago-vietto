import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Ad = () => {

    const [visible, setVisible] = useState(true);

    if (!visible) return null;


  return (
    <>
        <div className='adContainer'>
            <div></div>
            <h3 className='adText'>Stay Young with Free delivery over $175 and Gift over $200.</h3>
            <FontAwesomeIcon
                className='adCloseIcon'
                icon={faXmark}
                onClick={() => setVisible(false)}
            />
        </div>
    </>
  )
}

export default Ad
