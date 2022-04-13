import React from 'react';

const QSearch = (props) => {
  return (
    <div className='q-search'>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label>
          <input className='q-search-box' onChange={(e) => {props.onSearchKeystroke(e);}}
          type='text'
          size='sm'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'>
          </input>
        </label>
        <button className='q-search-button'>
          <span>Magnifying Glass Symbol</span>
        </button>
      </form>
    </div>
  );
}

export default QSearch;
