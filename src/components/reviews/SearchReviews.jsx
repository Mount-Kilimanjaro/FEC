import React from 'react';
import Icon from './assets/searchIcon.png';

const SearchReviews = (props) => {

  return (
    <div className="searchBar-container">
      <input className="searchBar" placeholder="Search..." type="text" onChange={(e) => props.filterBySearch(e.target.value)}/>
      <button type="submit" id="searchBar-btn"><img src={Icon} alt=''/></button>
    </div>
  )
}

export default SearchReviews;