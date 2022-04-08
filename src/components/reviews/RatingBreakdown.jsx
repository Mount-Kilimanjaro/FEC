import React, { useState } from 'react';
import { RatingStar } from 'rating-star';
import { calculateRatingAverage, calculatePercentRecommend, calculateTotalRatings } from '../../utils/reviews/ratingAverage.js';

import ProductBreakdownBars from './ProductBreakdownBars.jsx';


const RatingBreakdown = (props) => {

  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  const [activeFilters, setActiveFilters] = useState([]);

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

  const filterByStarRating = (e) => {
    const rating = e.target.getAttribute('name');
    if (!activeFilters.includes(Number(rating))) {
      setActiveFilters([...activeFilters, Number(rating)]);
      props.sortByStars([...activeFilters, Number(rating)]);
    }
    document.getElementById('removeFilters-btn').style.display = 'inline-block';
  }

  const toggleFilters = (e) => {
    var removeAll = document.getElementById('removeFilters-btn');
    if (e.target.id === 'removeFilters-btn') {
      setActiveFilters([]);
      props.sortByStars([]);
      removeAll.style.display = 'none';
    } else {
      if (activeFilters.length === 1) {
        removeAll.style.display = 'none';
        props.sortByStars([]);
      }
      var rating = Number(e.target.id.slice(0, 1));
      var index = activeFilters.indexOf(rating);
      var newState = activeFilters.slice();
      newState.splice(index - 1, 1);
      setActiveFilters(newState);
    }
  }


  return (
    <div id="ratingBreakdown-container">
    <p id="ratingBreakdown-title">RATINGS & REVIEWS</p>

      <div id="rating-summary">
        <span id="averageRating">{ Object.keys(props.metadata.ratings).length ? calculateRatingAverage(props.metadata.ratings) : '' }</span>
        <RatingStar
          id="ratingBreakdownStars"
          rating={ Object.keys(props.metadata.ratings).length ? Number(calculateRatingAverage(props.metadata.ratings)) : '' }
          size={20}
          colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
        />
        <span className="starsRating-label">{labels[Math.round(props.rating - 1)]}</span>
        <br/>
      </div>
        <div>{`${calculatePercentRecommend(props.metadata.recommended)}%`} of reviews recommend this product</div>


      <div id="star-breakdown">
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <div key={index} className="percentageBar-container" name={rating} onClick={(e) => filterByStarRating(e)}>
            <span className="star-filter" name={rating}>{rating} stars</span>
            <meter className="progress" value={props.metadata.ratings[rating]} max={calculateTotalRatings(props.metadata.ratings)} name={rating}/>
            <span name={rating} className="reviewCount-span">{props.metadata.ratings[rating]}</span>
          </div>
        ))}
      </div>

      <div id="applied-filters">
        {activeFilters.map((rating) => (
          <div onClick={(e) => toggleFilters(e)} key={JSON.stringify(`${rating}-filter`)} className="filter-on" id={`${rating}-filter`}>{`ⓧ ${rating} stars`}</div>
        ))}
      </div>
      <div id="removeFilters-container">
        <div id="removeFilters-btn" onClick={(e) => toggleFilters(e)}> ⓧ REMOVE ALL FILTERS </div>
      </div>
      <div id="characteristics-breakdown">
          {generateBreakdown()}
      </div>
    </div>
  )
}

export default RatingBreakdown;