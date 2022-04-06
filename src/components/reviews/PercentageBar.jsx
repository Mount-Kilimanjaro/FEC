import React from 'react';

const PercentageBar = (props) => {

  return (
    <>
      <meter className="progress" value={props.value} max={props.total}/>
    </>
  )
}

export default PercentageBar;