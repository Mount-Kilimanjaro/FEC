const sortByDate = (reviews) => {
  var sorted = reviews.sort((reviewOne, reviewTwo) => {
    return new Date(reviewOne.date) - new Date(reviewTwo.date);
  });
  return sorted.reverse();
}


module.exports = {
  sortByDate: sortByDate
}