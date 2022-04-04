import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PercentageBar = (props) => {

  return (
    <>
      <ProgressBar variant="success" now={props.value} max={props.total}/>
    </>
  )
}

export default PercentageBar;