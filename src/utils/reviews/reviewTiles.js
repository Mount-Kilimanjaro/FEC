const axios = require('axios');

module.exports = {

  formatDate: function (str) {
    var formatted = new Date(str).toString().slice(4)
    return formatted.slice(0, 11);
  },

  reportHelpful: function(reviewId) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`, { 'Authorization': process.env.REACT_APP_API_TOKEN })
      .then((response) => console.log(response))
      .catch((err) => console.error('Unsuccessful PUT request to /reviews/:report_id/helpful ', err));
  },

  reportReview: async function(reviewId) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/report`, { 'Authorization': process.env.REACT_APP_API_TOKEN })
      .then((response) => console.log(response))
      .catch((err) => console.error('Unsuccessful PUT to /reviews/:review_id/report ', err));
  }
}
