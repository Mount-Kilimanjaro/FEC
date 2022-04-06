import React, { useState } from 'react';
import { RatingStar } from 'rating-star';
import BreakdownBarLabels from './BreakdownBarLabels.jsx';

const AddReviewForm = (props) => {

  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  const [charCount, setRemaining] = useState(50);
  const [rating, setRating] = useState(0);

  const onBodyChange = (e) => {
    setRemaining(50 - e.target.value.length);
  };

  const onRatingChange = (rating) => {
    setRating(rating);
  };

  const loadFile = (e) => {
    if (e.target.files.length === 1) {
      var img = document.getElementById('output0');
      img.src = URL.createObjectURL(e.target.files[0]);
      img.style.display = 'block';
    } else {
      for (let key in e.target.files) {
        let img = document.getElementById(`output${key}`);
        img.src = URL.createObjectURL(e.target.files[key]);
        img.style.display = 'inline-block';
      }
    }
  }

  return (
    <div id="form-container">
      <form id="form">

        <span id="overallRating-container">
          <span className="mainForm-header">Overall Rating<span className="requiredInput">*</span></span>

          <div className="box flex">
            <RatingStar
              clickable
              id={'user-starRating'}
              maxScore={5}
              rating={rating}
              onRatingChange={(rating) => onRatingChange(rating)}
              colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
            />
            <span className="starsRating-label">{labels[rating - 1]}</span>
          </div>
        </span>

        <div id="recommend-container">
          <div className="mainForm-header">Do you recommend this product?<span className="requiredInput">*</span></div>


          <label htmlFor="recommend-yes">Yes</label>
          <input type="radio" name="recommend-yes"/>

          <label htmlFor="recommend-no">No</label>
          <input type="radio" name="recommend-no"/>
        </div>


        <div id="characteristics-container">
          <div className="mainForm-header">Characteristics<span className="requiredInput">*</span></div>


          {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map((factor, index) => (
            <div key={JSON.stringify(factor)}>
              {/* TO DO: change label */}
              <label htmlFor={`${factor}`}/>
              <span className="factorLabels">{ factor }</span>

              <input name={`${factor}1`} type="radio" />

              <input name={`${factor}2`} type="radio"/>

              <input name={`${factor}3`} type="radio"/>

              <input name={`${factor}4`} type="radio"/>

              <input name={`${factor}5`} type="radio"/>

              <div className="labels-modalChars">
                <BreakdownBarLabels char={factor}/>
              </div>

            </div>
          ))}
        </div>

        <div id="reviewSummary-container">
          <div className="mainForm-header">Review Summary</div>

          <textarea className="reviewInput" name="reviewSummary" maxLength="60" rows="2" cols="50" placeholder="Example: Best purchase ever!"/>
        </div>

        <div id="reviewBody-container">
          <div className="mainForm-header">Review Body<span className="requiredInput">*</span></div>

          <textarea className="reviewInput" name="reviewBody" minLength="50" rows="2" cols="50" maxLength="1000" placeholder="Why did you like this product or not?" onChange={(e) => onBodyChange(e)}/>
          <br/>
          <span>{charCount <= 0 ? `Minimum reached` : `Minimum required characters left: ${charCount}`}</span>
        </div>

        <div id="photos-container">
          <div className="mainForm-header">Upload your photos<span className="requiredInput">*</span></div>

          <label htmlFor="photos" class="uploadPhotos"/>
          <input
            type="file"
            name="photos"
            id="uploadPhotos"
            accept="image/jpeg, image/png"
            onChange={(e) => loadFile(e)}
            multiple/>

          <div>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <img id={`output${index}`} width="200" style={{ display: 'none' }} alt='userImg'/>
            ))}
          </div>

        </div>

        <div id="nickname-container">
          <div className="mainForm-header">What is your nickname?<span className="requiredInput">*</span></div>

          <input className="reviewInput" type="text" maxLength="60" placeholder="jackson11!" name="nickname"/><br/>
          <span>For privacy reasons, do not use your full name or email address.</span>
        </div>

        <div id="email-container">
          <div className="mainForm-header">Enter your email<span className="requiredInput">*</span></div>

          <input type="text" className="reviewInput" maxLength="60" name="email" placeholder="jackson11@email.com"/><br/>
          <span>For authentication reasons, you will not be emailed.</span>
        </div>

      </form>
    </div>
  )
}

export default AddReviewForm;