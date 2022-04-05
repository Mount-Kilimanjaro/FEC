import React, { useState } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import ReviewsModal from './ReviewsModal.jsx';
import Button from './Button.jsx'
import '../../style/ratings-reviews/reviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { sortByDate, sortByRelevance } from '../../utils/reviews/sortingUtils.js';


const ReviewsList = (props) => {

  const [displayList, setDisplay] = useState(2);
  const [displayButton, toggleButton] = useState('inline');
  const [displayModal, toggleModal] = useState(false);


  const addReviews = (e) => {
    if (props.reviews[displayList + 2] !== undefined) {
      setDisplay(displayList + 2);
    } else {
      setDisplay(props.reviews.length);
      toggleButton('none');
    }
  }

  const sort = (e) => {
    switch (e.target.value) {
      case 'relevance':
        // sortByRelevance();
        break;
      case 'newest':
        // sortByDate(props.reviews);
        // setDisplay(2);
        break;
      case 'helpfulness':
        // function to sort by helpfulness
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">

      <div id="reviewCount"><b>{props.reviews.length} reviews, sorted by</b>
        <select onChange={(e) => sort(e)}>
          <option>relevance</option>
          <option>newest</option>
          <option>helpfulness</option>
        </select>
      </div>

      <div id="reviewsList-container" className="scroller">
        {props.reviews.slice(0, displayList).map((review) => (
          <div key={JSON.stringify(review)}>
            <ReviewTile review={review} />
          </div>
        ))}
        {displayList < 1 ? <Button className="reviewButtons" onClick={() => toggleModal(true)} label={"ADD A REVIEW"} /> : <></>}
      </div>

      <div className="reviewButtons-container">
        <button className="reviewButtons" onClick={() => addReviews()} style={{ display: displayButton }}>MORE REVIEWS</button>
        <button className="reviewButtons" label={"ADD A REVIEW"} onClick={toggleModal}>ADD A REVIEW+</button>
        <ReviewsModal show={displayModal} onHide={() => toggleModal(false)} />
      </div>

    </div>

  )
}

export default ReviewsList;

