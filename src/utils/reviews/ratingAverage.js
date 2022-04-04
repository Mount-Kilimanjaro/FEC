const calculateRatingAverage = (ratingObj) => {
  var vals = Object.values(ratingObj);
  var score = vals.reduce((total, count, index) => {
    return total += (Number(count) * (index + 1));
  }, 0);
  var responses = calculateTotalRatings(ratingObj);
  return (score / responses).toFixed(1);
}

const calculateTotalRatings = (ratingObj) => {
  var vals = Object.values(ratingObj);
  return vals.reduce((total, count) => {
    return total += (Number(count));
  }, 0);
}

const calculatePercentRecommend = (recObj) => {
  var total = Number(recObj["false"]) + Number(recObj["true"]);
  return (recObj["true"] / total * 100).toFixed(0);
}

module.exports = {
  calculateRatingAverage: calculateRatingAverage,
  calculatePercentRecommend: calculatePercentRecommend,
  calculateTotalRatings: calculateTotalRatings
}
