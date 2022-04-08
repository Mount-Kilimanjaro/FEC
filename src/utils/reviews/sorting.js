const axios = require('axios');

module.exports = {
  sortByDate: (reviews) => {
    var sorted = reviews.sort((reviewOne, reviewTwo) => {
      return new Date(reviewOne.date) - new Date(reviewTwo.date);
    });
    return sorted.reverse();
  },
  sortByHelpfulness: (reviews) => {
    var sorted = reviews.sort((reviewOne, reviewTwo) => {
      return reviewOne.helpfulness - reviewTwo.helpfulness;
    });
    return sorted.reverse();
  },
  sortByRelevance: async (id) => {
    try {
      var headers = {
        'Authorization': process.env.REACT_APP_API_TOKEN
      };
      var relevant = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&sort="relevant"&count=1000`, { headers });

      return relevant;
    }
    catch (err) {
      console.error(err);
    }
  },
  sortByStarRating: (ratingList, reviews) => {
    console.log(ratingList, 'ratingList');
    console.log(reviews, 'reviews');
    // var copies = [...reviews];
    // if (ratingList.length > 1) {

    // }
    // return reviews.filter((review) => {
    //   if (review.rating === rating) {
    //     return review;
    //   }
    // });
  }
}