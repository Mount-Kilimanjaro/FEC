import axios from 'axios';

const sortByDate = (reviews) => {
  var sorted = reviews.sort((reviewOne, reviewTwo) => {
    return new Date(reviewOne.date) - new Date(reviewTwo.date);
  });
  return sorted.reverse();
};

const sortByHelpfulness = (reviews) => {
  var sorted = reviews.sort((reviewOne, reviewTwo) => {
    return reviewOne.helpfulness - reviewTwo.helpfulness;
  });
  return sorted.reverse();
};

var sortByRelevance = async (id, reviews) => {
  try {
    const headers = {
      'Authorization': process.env.REACT_APP_API_TOKEN
    };
    const relevant = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&sort="relevant"&count=1000`, { headers });

    return relevant;
  }
  catch(err) {
    console.error(err);
  }
};

// const sortByStarRating = (rating, reviews) => {
//   return reviews.filter((review) => {
//     if (review.rating === rating) {
//       return review;
//     }
//   });
// };

module.exports = {
  sortByDate,
  sortByRelevance,
  sortByHelpfulness,
};