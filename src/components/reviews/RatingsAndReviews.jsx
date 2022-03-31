import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';


const RatingsAndReviews = (props) => {


  const id = useSelector((state) => state.category.currentItem.id);
  const [data, setData] = useState([]);


  // API call to retrieve reviews on state change
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const headers = {
          'Authorization': process.env.REACT_APP_API_TOKEN
        };
        const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, { headers });

        setData(response.data);

      }
      catch(err) {
        console.error(err);
      }
    }
    retrieveData();
  }, [id]);


  return (
    <div id="temp-container" style={{ height: '35%', width: '100%', maxWidth: '1280px', backgroundColor: 'pink' }}>
      <div id="reviews-container" style={{display: 'flex', border: 'solid', padding: '5px'}}>

        <RatingBreakdown />

        <ReviewsList reviews={data.results}/>

      </div>
    </div>
  )
}

export default RatingsAndReviews;