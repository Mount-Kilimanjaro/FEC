import React from 'react';
import BreakdownBarLabels from './BreakdownBarLabels.jsx';

const ProductBreakdownBars = (props) => {

  return (
    <div className="breakdownBar-container">
      <input type="range" className="breakdownBars" value={props.metadata.value} min="0" max="5"/>

      <BreakdownBarLabels char={props.char}/>
    </div>
  )
}

export default ProductBreakdownBars;