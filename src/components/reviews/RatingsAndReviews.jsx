import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import { sortByStarRating } from '../../utils/reviews/sorting.js';


const RatingsAndReviews = (props) => {

  const id = useSelector((state) => state.category.currentItem.id);
  const [reviewList, setList] = useState({product: null, results: []});
  const [reviewsMeta, setMeta] = useState({product_id: id, ratings: {}, recommended: {}, characteristics: {}});
  const [sortedReviews, setSorted] = useState([]);
  const [sort, toggleSort] = useState(false);

  // API call to retrieve reviews on state change
  useEffect(() => {

    const retrieveData = async () => {
      try {
        const headers = {
          'Authorization': process.env.REACT_APP_API_TOKEN
        };
        const reviewList = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&sort="relevant"&count=1000`, { headers });
        const metadata = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta/?product_id=${id}`, { headers });

        setMeta(metadata.data);
        setList(reviewList.data);

      }
      catch (err) {
        console.error(err);
      }
    }
    if (id) {
      retrieveData();
    }
  }, [id]);

  var sortByStars = (appliedFilters) => {
    if (appliedFilters.length > 1) {
      const sorted = sortByStarRating(appliedFilters, sortedReviews.results);
      setSorted(sorted);
      toggleSort(true);
    } else if (appliedFilters.length === 1) {
      const sorted = sortByStarRating(appliedFilters, reviewList.results);
      setSorted(sorted);
      toggleSort(true);
    } else {
      toggleSort(false);
    }
  }

  return (
    <div id="reviews-container">
      <RatingBreakdown metadata={reviewsMeta} sortByStars={sortByStars}/>
      <ReviewsList
        metadata={reviewsMeta}
        reviews={reviewList.results}
        sort={sort}
        sortedReviews={sortedReviews}
      />
    </div>
  )
}

export default RatingsAndReviews;