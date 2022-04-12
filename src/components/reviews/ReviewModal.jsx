import React from 'react';
import AddReviewForm from './AddReview.jsx';

const AddAReviewModal = (props) => {

  if (document.getElementById('productName')) {
    var product = document.getElementById('productName').innerText;
  }
  if (document.getElementById('styleSelector')) {
    var style = document.getElementById('styleSelector').innerText.slice(7);
  }
  return (

    <div id="addReview-modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={(e) => props.updateStatistic(props.closeModal(e), 'Ratings/Reviews: close add review modal')}className="close">&times;</span>
          <h3>Write your review</h3>
          <h5>About the { style } { product }</h5>
        </div>
        <hr/>
        <div className="modal-body">
          <AddReviewForm metadata={props.metadata} updateStatistic={props.updateStatistic}/>
        </div>
      </div>
    </div>

  )
}

export default AddAReviewModal;