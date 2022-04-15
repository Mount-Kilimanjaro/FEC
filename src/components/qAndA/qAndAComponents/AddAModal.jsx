import React from 'react';

const AddAModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className='a-modal'>
      <div className='a-modal-content'>
        <div className='a-modal-header'>
            <h4 className='q-modal-prompt'>Thank you for contributing to our fashion community!</h4>
        </div>
        <div className='a-modal-form'>
          <label>Please enter your answer here.</label>
            <input className='a-modal-input'
              type='textarea'
              size='sm'
              placeholder='Buy another for a friend!'>
            </input>
          <label>Please enter your username here. For your privacy, avoid using your name or social media usernames.</label>
            <input className='a-modal-input'
              type='text'
              size='sm'
              placeholder='jack543!'>
            </input>
          <label>Please enter your e-mail here.</label>
          <input className='a-modal-input'
            type='textarea'
            size='sm'
            placeholder='jack@email.com'>
          </input>
        </div>
        <div className='a-modal-footer'>
          <span>
            <button onClick={props.onClose} className='a-modal-button'>Close</button>
            &emsp;|&emsp;
            <button onClick={props.onClose} className='a-modal-button'>Submit Answer</button>
          </span>
        </div>
      </div>
    </div>
  )
}
export default AddAModal;