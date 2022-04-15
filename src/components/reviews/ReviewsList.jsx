import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewModal from './ReviewModal.jsx';
import SearchReviews from './SearchReviews.jsx';
import '../../style/ratings-reviews/reviews.css';
import { updateStatistic } from '../../utils/siteStatistic.js';

const ReviewsList = (props) => {

  const [displayListLength, setDisplayLength] = useState(2);
  const [displayButton, toggleButton] = useState('inline');

  const addReviews = (e) => {
    if (props.reviews[displayListLength + 2] !== undefined) {
      setDisplayLength(displayListLength + 2);
    } else {
      setDisplayLength(props.reviews.length);
      toggleButton('none');
    }
  }
  const sort = (e) => {
    switch (e.target.value) {
      case 'relevance':
        props.sortByDropdown('relevance');
        setDisplayLength(2);
        break;
      case 'newest':
        props.sortByDropdown('newest');
        setDisplayLength(2);
        break;
      case 'helpfulness':
        props.sortByDropdown('helpfulness');
        setDisplayLength(2);
        break;
      default:
        break;
    }
  }

  const openModal = (e) => {
    document.getElementById('addReview-modal').style.display = 'block';
  }

  const closeModal = (e) => {
    document.getElementById('addReview-modal').style.display = 'none';
  }

  return (
    <div className="reviewsList-outer">
      <div id="reviewCount">
        <div className="searchDropdowns">
          <b>{props.sort ? props.sortedReviews.length : props.reviews.length} reviews, sorted by</b>
          <select style={{ backgroundColor: '#f5f5f5'}} onChange={(e) => sort(e)}>
            <option>relevance</option>
            <option>newest</option>
            <option>helpfulness</option>
          </select>
        </div>
        <div className="searchReviews-container"><SearchReviews filterBySearch={props.filterBySearch}/></div>

      </div>
      <div id="reviewsList-container" className="scroller">
        {props.sort ? props.sortedReviews.slice(0, displayListLength).map((review) => (
          <div key={JSON.stringify(review)}>
            <ReviewTile review={review} updateStatistic={updateStatistic}/>
          </div>
        )) : props.reviews.slice(0, displayListLength).map((review) => (
          <div key={JSON.stringify(review)}>
            <ReviewTile review={review} updateStatistic={updateStatistic} />
          </div>
        ))}
        {displayListLength < 1 ? <button className="reviewButtons" onClick={(e) => updateStatistic(openModal(e), 'Ratings/Reviews: add review button')} label={"ADD A REVIEW"}>ADD A REVIEW+</button> : <></>}
      </div>

      <div className="reviewButtons-container">
        <button className="reviewButtons" onClick={(e) => updateStatistic(addReviews(), 'Ratings/Reviews: more reviews button')} style={{ display: displayButton }}>MORE REVIEWS</button>
        <button id="addReview-btn" className="reviewButtons" label={"ADD A REVIEW"} onClick={(e) => updateStatistic(openModal(e), 'Ratings/Reviews: add review button')}>ADD A REVIEW+</button>
        <ReviewModal
          closeModal={closeModal}
          metadata={props.metadata}
          updateStatistic={updateStatistic}
        />

      </div>

    </div>

  )
}

export default ReviewsList;

