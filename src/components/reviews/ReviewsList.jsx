import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import '../../style/ratings-reviews/reviews.css';



const ReviewsList = (props) => {



  return (

    <div id="reviewsList-container" className="scroller" >
      <div id="reviewCount"><b>{props.reviews.length} reviews, sorted by relevance</b></div>
      {!props.reviews ? <div>No reviews</div> : props.reviews.map((review) => (
        <div key={JSON.stringify(review)}>
          <ReviewTile review={review}/>
          <hr/>
        </div>
      ))
      }
    </div>
  )
}

export default ReviewsList;