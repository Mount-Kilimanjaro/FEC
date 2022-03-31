import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';


const RatingsAndReviews = (props) => {

  return (
    <div id="reviews-container" style={{display: 'flex', borderStyle: 'solid', padding: '5px'}}>

      <RatingBreakdown />

      <ReviewsList />

    </div>
  )
}

export default RatingsAndReviews;