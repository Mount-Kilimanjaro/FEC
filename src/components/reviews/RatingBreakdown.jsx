import React from 'react';
import StarRating from './StarRating.jsx';
import { calculateRatingAverage, calculatePercentRecommend, calculateTotalRatings } from '../../utils/reviews/ratingAverage.js';
import PercentageBar from './PercentageBar.jsx';
import ProductBreakdownBars from './ProductBreakdownBars.jsx';


const RatingBreakdown = (props) => {

  const generateBreakdown = () => {
    var chars = Object.keys(props.metadata.characteristics);
    return chars.map((char) => {
      return (
        <div key={JSON.stringify(char)}>
          <span>{char}</span>
          <ProductBreakdownBars metadata={props.metadata.characteristics[char]} char={char}/>
        </div>
      )}
    )
  }

  return (

    <div id="ratingBreakdown-container">
    <p style={{ width: '100%', height: '10px' }}>RATINGS & REVIEWS</p>

      <div id="rating-summary">
        <span style={{ fontSize: '4em' }}><b>{calculateRatingAverage(props.metadata.ratings)}</b></span>
        <StarRating ratingValue={Number(calculateRatingAverage(props.metadata.ratings))} allowHalfIcon={true} disabled={true}/><br/>
        <span>{`${calculatePercentRecommend(props.metadata.recommended)}%`} of reviews recommend this product</span>
      </div>

      <div id="star-breakdown">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={JSON.stringify(rating)} className="percentageBar-container">
            <span style={{ display: 'inline-flex' }}><u>{rating} stars</u></span>
            <PercentageBar
              style={{ display: 'inline-flex'}}
              className="percentageBar"
              total={calculateTotalRatings(props.metadata.ratings)}
              value={props.metadata.ratings[rating]}
            />
            <span className="reviewCount-span">{props.metadata.ratings[rating]}</span>
          </div>
        ))}
      </div>
      <div id="characteristics-breakdown">
          {generateBreakdown()}
      </div>
    </div>
  )
}

export default RatingBreakdown;