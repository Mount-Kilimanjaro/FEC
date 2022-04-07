import React from 'react';

const ImageModal = (props) => {


  return (
    <div id="image-modal" className="img-modal">

        <span
          onClick={(e) => props.toggleModal(e)} className="img-close">
          &times;
        </span>

        <img src={props.img} id="img" className='userImages-modal' alt=''/>

    </div>
  )
}

export default ImageModal;