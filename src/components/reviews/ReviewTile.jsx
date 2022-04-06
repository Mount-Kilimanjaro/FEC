import React from 'react';
import formatDate from '../../utils/reviews/reviewsUtils.js'
import { RatingStar } from 'rating-star';

const ReviewTile = (props) => {

  return (
    <>
      <div className="reviewTile-container">

        <div className="reviewHeader tile">

          <span>
            <div className="reviewTile-stars">
              <RatingStar
                id={'rating-star'}
                clickable={props.clickable}
                size={20}
                maxScore={5}
                rating={props.rating}
                colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
              />
            </div>
          </span>
          <span>{props.review.reviewer_name}, {formatDate(props.review.date)}</span>

        </div>

        <div className="reviewSummary tile"><b>{props.review.summary}</b></div>

        <div className="reviewBody tile">
          {props.review.body}
          {props.review.recommended}

        </div>

        <div className="reviewResponse tile">{props.review.response}</div>

        <div className="reviewHelpful tile"> Helpful? <span style={{ textDecoration: 'underline' }}>Yes</span> ({props.review.helpfulness}) | <span style={{ textDecoration: 'underline' }}>Report</span> </div>
      </div>

    </>
  )
}

export default ReviewTile;