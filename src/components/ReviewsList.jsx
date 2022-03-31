import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {

  return (
    <div id="reviewsList-container" style={{border: 'solid', height: '600px', width: '100%' }}>
      Reviews List
      <ReviewTile />
      <div id="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: 'solid', height: '60px', width: '160px', margin: '5px',  }}> More Reviews</div>
        <div style={{ border: 'solid', height: '60px', width: '160px', margin: '5px' }}> Add a Review + </div>
      </div>
    </div>
  )
}

export default ReviewsList;