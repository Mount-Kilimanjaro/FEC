import React, { useState, useEffect } from 'react';
import Card from './RelatedProductCard.jsx';

function RelatedProducts (props) {

  return (
    <div>
      <h1>Related Products</h1>
      <div className='relatedProducts'>
        {console.log('from inside RP', props.array)}
 
        {props.array.map((value, index) => {
          return (<Card prop1={value} key={index}/>)
        })
        }
      </div>
    </div>
    )
}

export default RelatedProducts;



{/* <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div> */}