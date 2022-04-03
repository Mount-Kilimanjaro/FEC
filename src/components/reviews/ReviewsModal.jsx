import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import StarRating from './StarRating.jsx';

const ReviewsModal = (props) => {
  // commented out due to bug
  // const product = document.getElementById('productName').innerText;
  // const style = document.getElementById('styleSelector').innerText.slice(7);
  const [charCount, setRemaining] = useState(50);

  const onBodyChange = (e) => {
    setRemaining(50 - e.target.value.length);
  };

  return (
    <>
      <Modal
        { ...props }
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Write your review</h3>
            {/* commented out due to bug */}
            {/* <h5>About the { style } { product }</h5> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>

            <Form.Group>
              <Form.Label>Overall Rating<span className="requiredInput">*</span></Form.Label>
              <div className="box flex">
                <StarRating />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Do you recommend this product?<span className="requiredInput">*</span></Form.Label><br />
              <Form.Check type="radio" label="Yes" inline />
              <Form.Check type="radio" label="No" inline />
            </Form.Group>

            <Form.Group>
              <Form.Label>Characteristics<span className="requiredInput">*</span></Form.Label>

              {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map((factor) => (
                <div key={ JSON.stringify(factor) }>
                  <Form.Group>
                    <Form.Label style={{ width: '65px' }}>{ factor }</Form.Label>
                    <Form.Check type="radio" label="1" inline />
                    <Form.Check type="radio" inline />
                    <Form.Check type="radio" inline />
                    <Form.Check type="radio" inline />
                    <Form.Check type="radio" label="5" inline />
                  </Form.Group>
                </div>
              ))}
            </Form.Group>

            <Form.Group>
              <Form.Label>Review Summary</Form.Label>
              <Form.Control as="textarea" maxLength="60" placeholder="Example: Best purchase ever!" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Review Body<span className="requiredInput">*</span></Form.Label>
              <Form.Control as="textarea" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" controlId="modal-reviewBody" onChange={ (e) => onBodyChange(e) } />
              <Form.Text>{charCount <= 0 ? `Minimum reached` : `Minimum required characters left: ${ charCount }`} </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Upload your photos</Form.Label>
              <Form.Control controlId="modal-photos" type="file" multiple />
            </Form.Group>

            <Form.Group>
              <Form.Label>What is your nickname?<span className="requiredInput">*</span></Form.Label>
              <Form.Control maxLength="60" placeholder="jackson11!" controlId="modal-nickname" />
              <Form.Text>For privacy reasons, do not use your full name or email address</Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter your email<span className="requiredInput">*</span></Form.Label>
              <Form.Control maxLength="60" placeholder="jackson11@email.com" controlId="modal-nickname" />
              <Form.Text>For authentication reasons, you will not be emailed</Form.Text>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={ props.onHide }>Submit Review</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default ReviewsModal;