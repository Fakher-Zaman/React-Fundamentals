import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModel }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel();
    }, 3000);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;