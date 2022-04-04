import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PercentageBar = (props) => {

  return (
    <>
      <ProgressBar variant="success" now={props.value} max={props.total} style={{ width: '253px', height: '10px' }}/>
    </>
  )
}

export default PercentageBar;