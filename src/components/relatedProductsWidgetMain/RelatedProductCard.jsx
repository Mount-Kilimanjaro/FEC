import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



function RelatedProductCard (props) {


  return (

    <div className='relatedProductCards'>
      <img alt='shoe' src={props.prop1.photos[0].thumbnail_url}></img>
      <h3>SHOES</h3>
      <p>{props.prop1.name}</p>
      <span>{props.prop1.original_price}</span>
      <div className='stars'>review here</div>
    </div>
)
}

export default RelatedProductCard;