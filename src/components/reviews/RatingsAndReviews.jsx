import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';


const RatingsAndReviews = (props) => {


  const id = useSelector((state) => state.category.currentItem.id);
  const [data, setData] = useState({results: [{id: null}]});



  // API call to retrieve reviews on state change
  // useEffect(() => {
  //   const retrieveData = async () => {
  //     try {
  //       const headers = {
  //         'Authorization': process.env.REACT_APP_API_TOKEN
  //       };
  //       const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, { headers });

  //       setData(response.data);
  //       console.log(data);

  //     }
  //     catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   retrieveData();
  // }, [id]);

  // const [displayList, addToDisplay] = useState(props.reviews.slice(0, 2));

  const addReviews = (e) => {
    // var index = displayList.length + 2;
    // addToDisplay(data.results.slice(0, index));
  }

  return (
    <>
      <div id="reviews-container" style={{ display: 'flex', padding: '5px', width: '70%' }}>


        <RatingBreakdown />

        <ReviewsList reviews={data.results} />

      </div>
      <div>
        <button className="reviewButtons" onClick={() => addReviews()}>MORE REVIEWS</button>

        <button className="reviewButtons">ADD A REVIEW +</button>
      </div>
    </>
  )
}

export default RatingsAndReviews;