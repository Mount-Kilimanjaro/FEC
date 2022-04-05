import React, { useState } from 'react';
import { RatingStar } from 'rating-star';

const StarRating = (props) => {

  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great']
  const [rating, setRating] = useState(props.rating);

  const onRatingChange = (rating) => {
    setRating(rating);
  }

  return (
    <>
      <div className="star-rating">
        <RatingStar
          clickable={props.clickable}
          size={20}
          maxScore={5}
          rating={props.rating}
          onRatingChange={onRatingChange}
          colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
        />
        <span className="starsRating-label">{labels[Math.round(rating)]}</span>
      </div>
    </>
  )
}
export default StarRating;
