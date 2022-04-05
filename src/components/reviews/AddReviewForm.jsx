import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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

  return (

      <Form>

        <Form.Group>
          <Form.Label className="mainForm-header">Overall Rating<span className="requiredInput">*</span></Form.Label>
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
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Do you recommend this product?<span className="requiredInput">*</span></Form.Label><br />
          <Form.Check type="radio" label="Yes" inline/>
          <Form.Check type="radio" label="No" inline />
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Characteristics<span className="requiredInput">*</span></Form.Label>

          {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map((factor) => (
            <div key={JSON.stringify(factor)}>
              <Form.Group>
                <Form.Label className="factorLabels">{factor}</Form.Label>
                <Form.Check type="radio" inline />
                <Form.Check type="radio" inline />
                <Form.Check type="radio" inline />
                <Form.Check type="radio" inline />
                <Form.Check type="radio" inline />
              </Form.Group>
              <div className="labels-modalChars">
                <BreakdownBarLabels char={factor}/>
                <hr/>
              </div>
            </div>
          ))}
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Review Summary</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="Example: Best purchase ever!" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Review Body<span className="requiredInput">*</span></Form.Label>
          <Form.Control as="textarea" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" controlId="modal-reviewBody" onChange={(e) => onBodyChange(e)} />
          <Form.Text>{charCount <= 0 ? `Minimum reached` : `Minimum required characters left: ${charCount}`} </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Upload your photos</Form.Label>
          <Form.Control controlId="modal-photos" type="file" multiple />
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">What is your nickname?<span className="requiredInput">*</span></Form.Label>
          <Form.Control maxLength="60" placeholder="jackson11!" controlId="modal-nickname" />
          <Form.Text>For privacy reasons, do not use your full name or email address</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mainForm-header">Enter your email<span className="requiredInput">*</span></Form.Label>
          <Form.Control maxLength="60" placeholder="jackson11@email.com" controlId="modal-nickname" />
          <Form.Text>For authentication reasons, you will not be emailed</Form.Text>
        </Form.Group>

      </Form>
  )
}

export default AddReviewForm;