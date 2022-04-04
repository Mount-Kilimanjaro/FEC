import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



function RelatedProductCard () {


  return (
    <div className='relatedProductCards'>
    <img alt='shoe' src={require('./assets/asset.jpg')}></img>
    <h3>SHOES</h3>
    <p>Red Nike Shoe</p>
    <span>$500</span>
    <div className='stars'>review here</div>
    </div>
)
}

export default RelatedProductCard;