const axios = require('axios');

module.exports = {

  formatDate: function (str) {
    var formatted = new Date(str).toString().slice(4)
    return formatted.slice(0, 11);
  },

  reportHelpful: function (reviewId) {
    axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`,
      method: 'put',
      headers: {'Authorization': process.env.REACT_APP_API_TOKEN }
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(`Unsuccessful PUT request to /reviews/${reviewId}/helpful `, err));
  },

  reportReview: function (reviewId) {
    axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/report`,
      method: 'put',
      headers: {'Authorization': process.env.REACT_APP_API_TOKEN }
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(`Unsuccessful PUT to /reviews/${reviewId}}/report `, err));
  }
}
