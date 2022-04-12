import React from 'react';

const QSearch = (props) => {
  return (
    <div className='q-search'>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label className='q-search-box'>
          <span className='q-search-entry' onChange={(e) => {
            props.onSearchKeystroke(e);
          }}
          type='text'
          size='sm'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...' />
        </label>
        <button className='q-search-button'>
          <span>Magnifying Glass Symbol</span>
        </button>
      </form>
    </div>
  );
}

export default QSearch;
