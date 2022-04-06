import React, { useReducer, useState } from 'react';
import { RatingStar } from 'rating-star';
import BreakdownBarLabels from './BreakdownBarLabels.jsx';
import { formatData } from '../../utils/reviews/submitReview.js';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const AddReviewForm = (props) => {

  const labels = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
  const [charCount, setRemaining] = useState(50);
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useReducer(formReducer, {});

  const onBodyChange = (e) => {
    setRemaining(50 - e.target.value.length);
    handleChange(e);
  };

  const onRatingChange = (rating) => {
    setRating(rating);
    setFormData({ name: 'rating', value: rating });
  };

  const loadFile = (e) => {
    if (e.target.files.length === 1) {
      let img = document.getElementById('output0');
      let url = URL.createObjectURL(e.target.files[0]);
      img.src = url;
      img.style.display = 'block';
      setFormData({ name: 'photos', value: [url] });
    } else {
      var photoURLs = [];
      for (var key in e.target.files) {
        let img = document.getElementById(`output${key}`);
        let url = URL.createObjectURL(e.target.files[key]);
        img.src = url;
        img.style.display = 'inline-block';
        photoURLs.push(url);
      }
      setFormData({ name: 'photos', value: photoURLs });
    }
  }

  const handleChange = (e) => {
    const isRadioButton = e.target.type === 'radio' && e.target.name !== 'recommend';
    setFormData({
      name: e.target.name,
      value: isRadioButton ? { id: e.target.name, value: e.target.value } : e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    setFormData({ name: 'product_id', value: props.metadata.product_id });
    if (formData[rating]) {
      document.getElementById('addReview-modal').style.display = 'none';
      // formatData(props.metadata.characteristics, formData);
    }
  }

  return (
    <div id="form-container">
      <form id="form" name="addReviewForm">
        <div id="innerForm-container">

          <div id="overallRating-container">
            <span className="mainForm-header">Overall Rating<span className="requiredInput">*</span></span>

            <div className="box flex">
              <RatingStar
                clickable
                id='user-starRating'
                name='rating'
                maxScore={5}
                rating={rating}
                onRatingChange={(rating) => onRatingChange(rating)}
                colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
              />
              <input style={{ display: 'none' }} />
              <span className="starsRating-label">{labels[rating - 1]}</span>
            </div>
          </div>

          <div id="recommend-container">
            <div className="mainForm-header">
              Do you recommend this product?
              <span className="requiredInput">*</span>
            </div>

            <label htmlFor="recommend" />
            <input type="radio" name="recommend" onChange={handleChange} value={true} required />Yes
            <input type="radio" name="recommend" onChange={handleChange} value={false} required />No
          </div>


          <div id="characteristics-container">
            <div className="mainForm-header">
              Characteristics
              <span className="requiredInput">*</span>
            </div>
            {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map((factor, index) => (
              <div key={JSON.stringify(factor)}>
                <label htmlFor={factor} />
                <span className="factorLabels">{factor}</span>
                <input name={factor} onChange={handleChange} type="radio" value="1" required />
                <input name={factor} onChange={handleChange} type="radio" value="2" required />
                <input name={factor} onChange={handleChange} type="radio" value="3" required />
                <input name={factor} onChange={handleChange} type="radio" value="4" required />
                <input name={factor} onChange={handleChange} type="radio" value="5" required />
                <div className="labels-modalChars">
                  <BreakdownBarLabels char={factor} />
                </div>
              </div>
            ))}
          </div>

          <div id="reviewSummary-container">
            <div className="mainForm-header">Review Summary</div>
            <textarea className="reviewInput" name="summary" maxLength="60" rows="2" cols="50" placeholder="Example: Best purchase ever!" onChange={handleChange} />
          </div>

          <div id="reviewBody-container">
            <div className="mainForm-header">
              Review Body
              <span className="requiredInput">*</span>
            </div>
            <textarea className="reviewInput" name="body" minLength="50" rows="2" cols="50" maxLength="1000" placeholder="Why did you like this product or not?" onChange={(e) => onBodyChange(e)} required /><br />
            <span>{charCount <= 0 ? `Minimum reached` : `Minimum required characters left: ${charCount}`}</span>
          </div>

          <div id="photos-container">
            <div className="mainForm-header">Upload your photos</div>
            <label htmlFor="photos" />
            <input type="file" name="photos" id="uploadPhotos" accept="image/jpeg image/png" onChange={(e) => loadFile(e)} multiple />

            <div>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <img key={JSON.stringify(index)} id={`output${index}`} width="200" style={{ display: 'none' }} alt='userImg' />
              ))}
            </div>
          </div>

          <div id="nickname-container">
            <div className="mainForm-header">
              What is your nickname?
              <span className="requiredInput">*</span>
            </div>
            <input className="reviewInput" type="text" maxLength="60" placeholder="jackson11!" name="name" onChange={handleChange} required /><br />
            <span>For privacy reasons, do not use your full name or email address.</span>
          </div>

          <div id="email-container">
            <div className="mainForm-header">
              Enter your email
              <span className="requiredInput">*</span>
            </div>
            <input type="text" className="reviewInput" maxLength="60" name="email" placeholder="jackson11@email.com" onChange={handleChange} required /><br />
            <span>For authentication reasons, you will not be emailed.</span>
          </div>
        </div>

        <div id="submit-container">
          <button id="submitReview" type="submit" onClick={() => submit()}>Submit Review</button>
        </div>

      </form>
    </div>
  )
}

export default AddReviewForm;