import React from 'react';
import { RatingStar } from 'rating-star';

const StarRating = (props) => {

  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great']

  return (
      <div className="star-rating">
        <RatingStar
          id={'rating-star'}
          clickable={props.clickable}
          size={20}
          maxScore={5}
          rating={props.rating}
          colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
        />
        <span className="starsRating-label">{labels[Math.round(props.rating - 1)]}</span>
      </div>
  )
}
export default StarRating;
