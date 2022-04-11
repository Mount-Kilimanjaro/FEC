const axios = require('axios');


const formatData = (charsObj, data) => {
  var characteristics = {};
  for (var key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      if (charsObj[key]) {
        var characteristicId = charsObj[key].id;
        characteristics[characteristicId] = Number(data[key]['value']);
      }
      delete data[key];
    }
  }
  data['characteristics'] = characteristics;
  postData(data);
};

const postData = (data) => {
  const headers = {
      'Authorization': process.env.REACT_APP_API_TOKEN
  };
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', { data }, { headers })
    .then((response) => console.log(response.data))
    .catch((err) => console.error('Unsuccessful POST: ', err));
}

module.exports = formatData;