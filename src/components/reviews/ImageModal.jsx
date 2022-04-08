import React from 'react';

const ImageModal = (props) => {


  return (
    <div id="img-modal" className="img-modal">
      <div className="img-modal-content">
        <div
          onClick={(e) => props.toggleModal(e)} className="img-close">
          &times;
        <img src={props.img} id="img" className='userImages-modal' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default ImageModal;