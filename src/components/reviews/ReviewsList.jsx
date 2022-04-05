import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewsModal from './ReviewsModal.jsx';
import Button from './Button.jsx'
import { sortByDate } from '../../utils/reviews/sortingUtils.js';
import '../../style/ratings-reviews/reviews.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

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

  const sort = (e) => {
    switch (e.target.value) {
      case 'relevance':
        // function to sort by relevance
        break;
      case 'newest':
        console.log(props.reviews, 'pre');
        sortByDate(props.reviews);
        console.log(props.reviews, 'post');
        setDisplay(props.reviews.slice(0, 2));
        break;
      case 'rating':
        // function to sort by rating
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <div id="reviewCount"><b>{props.reviews.length} reviews, sorted by</b>
        <select onChange={(e) => sort(e)}>
          <option>relevance</option>
          <option>newest</option>
          <option>helpfulness</option>
        </select>
      </div>
      <div id="reviewsList-container" className="scroller" >

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

