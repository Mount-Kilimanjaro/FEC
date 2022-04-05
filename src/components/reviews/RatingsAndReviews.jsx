import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';


const RatingsAndReviews = (props) => {


  const id = useSelector((state) => state.category.currentItem.id);
  const [reviewList, setList] = useState({product: null, results: []});
  const [reviewsMeta, setMeta] = useState({product_id: id, ratings: {}, recommended: {}, characteristics: {}});

  // API call to retrieve reviews on state change
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const headers = {
          'Authorization': process.env.REACT_APP_API_TOKEN
        };
        const reviewList = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&count=1000`, { headers });
        const metadata = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${id}`, { headers });

        setMeta(metadata.data);
        setList(reviewList.data);

      }
      catch (err) {
        console.error(err);
      }
    }
    retrieveData();
  }, [id]);

  return (
    <>
      <div id="reviews-container">

        <RatingBreakdown metadata={reviewsMeta} />
        <ReviewsList reviews={reviewList.results} />

      </div>

    </>
  )
}

export default RatingsAndReviews;