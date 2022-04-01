import React from 'react';
import formatDate from '../../utils/reviewsUtils.js'
const ReviewTile = (props) => {

  return (
    <>
      <div className="reviewTile-container">

        <div className="reviewHeader tile">

          <span>{props.review.rating}</span>
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