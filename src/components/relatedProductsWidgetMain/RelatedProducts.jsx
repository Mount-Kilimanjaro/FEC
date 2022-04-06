import React from 'react';
import Card from './RelatedProductCard.jsx';

function RelatedProducts (props) {
  return (
    <div className='relatedProducts'>
      <h1>Related Products</h1>
      <div className='relatedProductsContent'>


        {props.arr.map((value, index) => {
          console.log(props.arr);
          return <Card prop1={value} key={index}/>
        })}
      </div>
    </div>
    )
}

export default RelatedProducts;








