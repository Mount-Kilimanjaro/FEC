import React, { useState } from 'react';
import { formatDate, reportHelpful, reportReview } from '../../utils/reviews/reviewTiles.js';
import { RatingStar } from 'rating-star';
import ImageModal from './ImageModal.jsx';

const ReviewTile = (props) => {

  const [helpful, disableHelpful] = useState(false);
  const [reported, disableReport] = useState(false);

  const toggleModal = (e) => {
    var modal = document.getElementById('img-modal');
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';
      document.getElementById('img').setAttribute('src', e.target.src);
    }
  }

  const displayPhotos = () => {
    if (props.review.photos.length > 1) {
      return props.review.photos.map((photo, index) => (
        <div key={JSON.stringify(photo)}>
          <img className="userImages" src={`${photo.url}`} alt="" onClick={(e) => props.updateStatistic(toggleModal(e), 'Ratings/Reviews: toggle review image modal')} />
          <ImageModal toggleModal={toggleModal} updateStatistic={props.updateStatistic}/>
        </div>
      ))
    }
  }

  const handleHelpfulReview = (e) => {
    if (!helpful) {
      const reviewId = e.target.getAttribute('dataid');
      document.getElementById(reviewId).innerText = `(${props.review.helpfulness += 1}) `;
      reportHelpful(reviewId);
      disableHelpful(true);
    }
  }
  
  const report = (e) => {
    if (!reported) {
      const reviewId = Number(e.target.getAttribute('dataid'));
      reportReview(reviewId);
      disableReport(true);
      e.target.innerText = '✓ Reported';
    }
  }

  return (

    <div className="reviewTile-container">
      <div className="reviewHeader">
        <span>
          <div className="reviewTile-stars">
            <RatingStar
              id="userRating-star"
              size={20}
              maxScore={5}
              rating={props.review.rating}
              colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
            />
          </div>
        </span>
        <span>{props.review.reviewer_name}, {formatDate(props.review.date)}</span>
      </div>

      <div className="reviewSummary"><b>{props.review.summary}</b></div>

      <div className="reviewBody ">{props.review.body}</div>

      {!props.review.photos.length ? <span style={{ display: 'none'}}> </span> : <div className="userImages-container">{displayPhotos()} </div>}

      {!props.review.recommend ? <></> : <div id="recommendProduct" style={{ margin: '3px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline' }} className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg> I recommend this product</div>}

      {!props.review.response ? <></> : <div className="sellerResponse "><b>Response from seller:</b> {props.review.response} </div>}

      <div className="reviewHelpful">
        <span>Helpful? </span>
        <span className="helpfulness-buttons" dataid={props.review.review_id} onClick={(e) => props.updateStatistic(handleHelpfulReview(e), 'Ratings/Reviews: report review helpful button')}>Yes</span>
        <span id={props.review.review_id}>({props.review.helpfulness}) | </span>
        <span className="helpfulness-buttons" dataid={props.review.review_id} onClick={(e) => props.updateStatistic(report(e), 'Ratings/Reviews: report review button')}> Report</span>
      </div>
    </div>
  )
}

export default ReviewTile;