import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import '../../style/ratings-reviews/reviews.css';



const ReviewsList = (props) => {

  const [displayList, setDisplay] = useState(props.reviews.slice(0, 2));
  const [displayButton, toggleButton] = useState('inline');


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
    <div>
      <div id="reviewsList-container" className="scroller" >
        <div id="reviewCount"><b>{props.reviews.length} reviews, sorted by relevance</b></div>
        {!displayList.length ? <div>No reviews</div> : displayList.map((review) => (
          <div key={JSON.stringify(review)}>
            <ReviewTile review={review}/>
            <hr />
          </div>
        ))}
      </div>

        <button className="reviewButtons" onClick={addReviews} style={{ display: displayButton }}>MORE REVIEWS</button>
        <button className="reviewButtons">ADD A REVIEW +</button>
    </div>
  )
}

export default ReviewsList;