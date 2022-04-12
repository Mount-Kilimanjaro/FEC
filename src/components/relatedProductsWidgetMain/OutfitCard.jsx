import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asset from './assets/asset.jpg';



function OutfitCard (props) {

  const RemoveProduct = () => {
    // useDispatch(removeFromFavorite())
  }

  if (props.prop1.photos[0].thumbnail_url) {
  return (
   <div className='relatedProductCards'>
     <svg onClick={props.closeModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 OutfitCancel" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      <img alt='shoe' src={props.prop1.photos[0].thumbnail_url}></img>
      <h3>SHOES</h3>
      <p>{props.prop1.name}</p>
      <span>{props.prop1.original_price}</span>
      <div className='stars'>review here</div>
    </div>
  )
  } else {
    return<div name={props.prop1.style_id} className='relatedProductCards'>
      <svg onClick={props.closeModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 OutfitCancel" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
<div onClick={props.addCard} name={props.prop1.style_id}>
<img name={props.prop1.style_id} alt='whatever' src={require('./assets/asset.jpg')}></img>
      <h3 name={props.prop1.style_id}>SHOES</h3>
    <p name={props.prop1.style_id}>{props.prop1.name}</p>
    <span name={props.prop1.style_id}>{props.prop1.original_price}</span>
    <div name={props.prop1.style_id} className='stars'>review here</div>
</div>

    </div>
  }

}

export default OutfitCard;