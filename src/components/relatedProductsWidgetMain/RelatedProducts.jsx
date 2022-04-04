import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './RelatedProductCard.jsx';

function RelatedProducts () {


  return (
    <div>
      <h1>Related Products</h1>
      <div className='relatedProducts'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    )
}

export default RelatedProducts;



{/* <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div>
        <div className='relatedProductCards'>card</div> */}