import React from 'react';
import StarRating from './StarRating.jsx';
import { calculateRatingAverage, calculatePercentRecommend } from '../../utils/reviews/ratingAverage.js';

const RatingBreakdown = (props) => {


  return (

    <div id="ratingBreakdown-container" style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '500px', margin: '5px'}}>
    <p style={{ width: '100%', height: '10px' }}>RATINGS & REVIEWS</p>

      <div id="rating-summary">
        <span>{calculateRatingAverage(props.metadata.ratings)}</span>
        <StarRating ratingValue={Number(calculateRatingAverage(props.metadata.ratings))} allowHalfIcon={true}/>
        <span>{`${calculatePercentRecommend(props.metadata.recommended)}%`} of reviews recommend this product</span>
      </div>

      <div id="star-breakdown">
        <span><u>5 stars</u></span><br/>
        <span><u>4 stars</u></span><br/>
        <span><u>3 stars</u></span><br/>
        <span><u>2 stars</u></span><br/>
        <span><u>1 stars</u></span><br/>
      </div>

      <div id="characteristics-breakdown">
        <span>Size</span><br/>
        <span>Comfort</span><br/>
      </div>
    </div>
  )
}

export default RatingBreakdown;