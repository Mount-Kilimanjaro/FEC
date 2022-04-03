import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ReviewsModal = (props) => {

  return (
    <>
      <Modal
        style={{ width: '100%', display: 'block' }}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3>Write your review</h3>
              <h5>About the PRODUCT NAME</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>

              <Form.Group>
                <Form.Label>Overall Rating<span style={{ color: 'red' }}>*</span></Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>Do you recommend this product?<span style={{ color: 'red' }}>*</span></Form.Label><br/>
                <Form.Check type="radio" label="Yes" inline/>
                <Form.Check type="radio" label="No" inline/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Characteristics<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control controlId="modal-characteristics"/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Review Summary</Form.Label>
                <Form.Control as="textarea" maxLength="60" placeholder="Example: Best purchase ever!"/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Review Body<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control as="textarea" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" controlId="modal-reviewBody"/>
                <Form.Text>Minimum required characters left: [###]</Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Upload your photos</Form.Label>
                <Form.Control controlId="modal-photos"/>
              </Form.Group>

              <Form.Group>
                <Form.Label>What is your nickname?<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control maxLength="60" placeholder="jackson11!" controlId="modal-nickname"/>
                <Form.Text>For privacy reasons, do not use your full name or email address</Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter your email<span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control maxLength="60" placeholder="jackson11@email.com" controlId="modal-nickname"/>
                <Form.Text>For authentication reasons, you will not be emailed</Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={props.onHide}>Submit Review</button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ReviewsModal;