import React, { useState } from 'react';

const StarRating = (props) => {

  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    var target = document.getElementById('rating-description');
    switch (index) {
      case 0:
        target.innerHTML = 'Poor';
        console.log(target.innerHTML);
        break;
      case 1:
        target.innerHTML = 'Fair';
        break;
      case 2:
        target.innerHTML = 'Average';
        break;
      case 3:
        target.innerHTML = 'Good';
        break;
      case 4:
        target.innerHTML = 'Great';
        break;
      default:
        target.innerHTML = '';
    }
  }

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <button
            id="stars"
            type="button"
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => handleClick(index)}>
            <span className="star"> &#9733; </span>

          </button>
        )
      })}
      <span id="rating-description"></span>
    </div>
  )
}

export default StarRating;
