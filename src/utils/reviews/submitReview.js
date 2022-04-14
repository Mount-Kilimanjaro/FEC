const axios = require('axios');


const formatData = (charsObj, data) => {
  console.log(charsObj, 'charsObj');
  console.log(data, 'data from formatData')
  var characteristics = {};
  for (var key in data) {
    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      if (charsObj[key]) {
        var characteristicId = charsObj[key].id;
        characteristics[characteristicId] = Number(data[key]['value']);
      }
      delete data[key];
    } else if (key === 'recommend') {
      data[key] = Boolean(data[key]);
    }
  }
  data['characteristics'] = characteristics;
  postData(data);
};

const postData = (data) => {
  console.log(data, 'data from postData');
  axios({
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/',
    method: 'post',
    data: data,
    headers: { 'Authorization': process.env.REACT_APP_API_TOKEN }
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.error('Unsuccessful POST: ', err));
}

module.exports = formatData;

