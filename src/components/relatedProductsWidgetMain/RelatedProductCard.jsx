import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asset from './assets/asset.jpg';



function RelatedProductCard (props) {

 if (props.prop1.photos[0].thumbnail_url) {
  return (
   <div className='relatedProductCards'>
      <img alt='shoe' src={props.prop1.photos[0].thumbnail_url}></img>
      <h3>SHOES</h3>
      <p>{props.prop1.name}</p>
      <span>{props.prop1.original_price}</span>
      <div className='stars'>review here</div>
    </div>
  )
 } else {
    return<div className='relatedProductCards'>
      <img alt='whatever' src={require('./assets/asset.jpg')}></img>
      <h3>SHOES</h3>
    <p>{props.prop1.name}</p>
    <span>{props.prop1.original_price}</span>
    <div className='stars'>review here</div>
    </div>
 }

}

export default RelatedProductCard;