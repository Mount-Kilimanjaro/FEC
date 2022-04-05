import React from 'react';
import Card from './RelatedProductCard.jsx';

function RelatedProducts (props) {
  console.log('from inside RP', props.arr)
  return (
    <div>
      <h1>Related Products</h1>
      <div className='relatedProducts'>


        {props.arr.map((value, index) =>
          console.log('value', value)
          // <Card prop1={value} key={index}/>
        )
        }
      </div>
    </div>
    )
}

export default RelatedProducts;








