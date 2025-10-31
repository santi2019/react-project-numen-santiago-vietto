import React, { useContext } from 'react';
import { ShoppingCartContext } from '@/context/ShoppingCartContextProvider';

const ConfirmModal = () => {
  
  const { modalOpen, confirmAdd, closeModal} = useContext(ShoppingCartContext);

  if (!modalOpen) return null;

  return (
    <>
      <div className="confirmModalContainer">
        <div className="confirmModalContent">
          <p>Do you want to add this item to the cart?</p>
          <div className="confirmModalButtons">
            <button className="confirmBtn" onClick={confirmAdd}>Confirm</button>
            <button className="cancelBtn" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;