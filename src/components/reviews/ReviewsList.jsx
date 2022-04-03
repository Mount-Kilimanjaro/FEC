import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewsModal from './ReviewsModal.jsx';
import Button from './Button.jsx'
import '../../style/ratings-reviews/reviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const ReviewsList = (props) => {

  const [displayList, setDisplay] = useState(props.reviews.slice(0, 2));
  const [displayButton, toggleButton] = useState('inline');
  const [displayModal, toggleModal] = useState(false);


  const addReviews = (e) => {
    var index = displayList.length + 2;
    if (props.reviews[index] !== undefined) {
      setDisplay(props.reviews.slice(0, index))
    } else {
      setDisplay(props.reviews);
      toggleButton('none');
    }
  }

  return (
    <div id="">
      <div id="reviewsList-container" className="scroller" >
        <div id="reviewCount"><b>{props.reviews.length} reviews, sorted by relevance</b></div>
        {displayList.length === 1 ? <Button onClick={() => toggleModal(true)} label={"ADD A REVIEW"} /> : displayList.map((review) => (
          <div key={JSON.stringify(review)}>
            <ReviewTile review={review} />
          </div>
        ))}
      </div>

      <button className="reviewButtons" onClick={addReviews} style={{ display: displayButton }}>MORE REVIEWS</button>

      <button className="reviewButtons" label={"ADD A REVIEW"} onClick={toggleModal}>ADD A REVIEW</button>
        <ReviewsModal show={displayModal} onHide={() => toggleModal(false)} />

    </div>
  )
}

export default ReviewsList;

