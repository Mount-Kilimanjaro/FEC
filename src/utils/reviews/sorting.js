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
    if (ratingList.length === 1) {
      var sorted = reviews.filter((review) => {
        if (review.rating === ratingList[0]) {
          return review;
        }
      });
      return sorted;
    } else {
      var sortedMany = [];
      for (var i = 0; i < ratingList.length; i++) {
        var filter = ratingList[i];
        for (var j = 0; j < reviews.length; j++) {
          if (reviews[j].rating === filter) {
            sortedMany.push(reviews[j])
          }
        }
      }
      return sortedMany;
    }
  }
}