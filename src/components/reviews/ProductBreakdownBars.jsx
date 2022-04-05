import React from 'react';
import Form from 'react-bootstrap/Form';
import BreakdownBarLabels from './BreakdownBarLabels.jsx';

const ProductBreakdownBars = (props) => {

  return (
    <div className="breakdownBar-container">
      <Form.Range value={props.metadata.value} min="0" max="5" disabled style={{ width: '245px'}}/>

      <BreakdownBarLabels char={props.char}/>
    </div>
  )
}

export default ProductBreakdownBars;