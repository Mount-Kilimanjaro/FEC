import React from 'react';
import Modal from 'react-bootstrap/Modal';
import AddReviewForm from './AddReviewForm.jsx';


const ReviewsModal = (props) => {

  if (document.getElementById('productName')) {
    var product = document.getElementById('productName').innerText;
  }
  if (document.getElementById('styleSelector')) {
    var style = document.getElementById('styleSelector').innerText.slice(7);
  }

  return (
    <>
      <Modal
        { ...props }
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Write your review</h3>
            <h5>About the { style } { product }</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddReviewForm />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={ props.onHide }>Submit Review</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default ReviewsModal;