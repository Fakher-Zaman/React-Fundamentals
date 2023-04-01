import React, { useEffect } from 'react';

const Modal = ({ modelContent }) => {
  return (
    <div className='modal'>
      <p>{modelContent}</p>
    </div>
  );
};

export default Modal;