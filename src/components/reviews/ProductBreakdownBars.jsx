import React from 'react';
import BreakdownBarLabels from './BreakdownBarLabels.jsx';

const ProductBreakdownBars = (props) => {

  return (
    <div className="breakdownBar-container">
      <input type="range" className="breakdownBars" defaultValue={props.metadata.value} title={props.metadata.value.slice(0, 3)} min="0" max="5" disabled/>

      <BreakdownBarLabels char={props.char}/>
    </div>
  )
}

export default ProductBreakdownBars;