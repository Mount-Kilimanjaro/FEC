import React from 'react';

const QModal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className='q-modal-container'>
        <div className='q-modal-container-component'>
          <div className='q-modal-header'>
            <h4 className='q-modal-prompt'>What would you like to ask about this product{/*{`${currentItemId}`}*/}?</h4>
          </div>
          <div className='q-modal-body'>
            <label>Please enter your question here.</label>
              <input className='q-modal-question-body'
              type='textarea'
              size='sm'
              placeholder='Why did you like the product or not?'>
            </input>
            <label>Please enter your name.</label>
              <input className='q-modal-username'
                type='text'
                size='sm'
                placeholder='Example: jackson11!'>
              </input>
            <label>Please enter your e-mail.</label>
              <input className='q-modal-email'
                type='textarea'
                size='sm'
                placeholder='jackson11@gmail.com'>
              </input>
          </div>
          <div className='q-modal-footer'>
            <span>
              <button onClick={props.onClose} className='q-modal-button'>
                Close
              </button>
              &emsp;|&emsp;
              <button onClick={props.onClose} className='q-modal-button'>
                Submit Question
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
};

export default QModal;