import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CommentsList from '../Comments/CommentsList/CommentsList';
import '../Modal/Modal.css';



const modalContainer = document.getElementById('modal-container');

const Modal = ({isOpen, handleClose}) => {
    const modalNode = document.createElement('div');

    useEffect(() => {
        modalContainer.appendChild(modalNode);

        return () => {
            modalContainer.removeChild(modalNode);
        };
    }, [modalNode]);

    if(!isOpen) return null;

  return ReactDOM.createPortal(
  
  <div className="modal-window">
    <div className="comments-sticky">
        <h4>Comments</h4>
        <button onClick={handleClose} className="close-button">Close</button>
    </div>
    
    <CommentsList />
    
    
  
  </div>, modalNode);
};

export default Modal;