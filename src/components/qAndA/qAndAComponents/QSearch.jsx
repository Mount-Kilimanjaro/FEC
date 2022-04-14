import React from 'react';
import searchIcon from '../assets/searchIcon.png';

const QSearch = (props) => {
  return (
    <div className='q-search'>
      <form className='q-search-form' onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label className='q-search-label'>
          <input className='q-search-input' onChange={(e) => {props.onSearchKeystroke(e);}}
          type='text'
          size='sm'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'>
          </input>
        </label>
        <button className='q-search-button' type='submit' onClick={() => alert('QAndA Searchbar Clicked')}>
          <img className='q-search-image' src={searchIcon} alt='' />
        </button>
      </form>
    </div>
  );
}

export default QSearch;