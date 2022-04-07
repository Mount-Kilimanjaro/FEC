import React from 'react';
import formatDate from '../../utils/reviews/reviewsUtils.js'
import { RatingStar } from 'rating-star';

const ReviewTile = (props) => {

  const displayPhotos = () => {
    if (props.review.photos.length > 1) {
      return props.review.photos.map((photo) => (
        <img key={JSON.stringify(photo)} src={`${photo.url}`} width="100" height="100" alt="" style={{ padding: '3px', borderRadius: '5px', objectFit: 'cover'}}/>
      ))
    }
  }
  return (
    <>
      <div className="reviewTile-container">

        <div className="reviewHeader">

          <span>
            <div className="reviewTile-stars">
              <RatingStar
                id="userRating-star"
                clickable={props.clickable}
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

        {!props.review.photos.length ? <></> : <div style={{ display: 'flex' }}>{displayPhotos()}</div>}

        {!props.review.recommend ? <></> : <div style={{ margin: '3px' }}><b>✓</b> I recommend this product </div>}

        {!props.review.response ? <></> : <div className="sellerResponse "><b>Response from seller:</b> {props.review.response} </div>}

        <div className="reviewHelpful"> Helpful? <span style={{ textDecoration: 'underline' }}>Yes</span> ({props.review.helpfulness}) | <span style={{ textDecoration: 'underline' }}>Report</span> </div>
      </div>

    </>
  )
}

export default ReviewTile;