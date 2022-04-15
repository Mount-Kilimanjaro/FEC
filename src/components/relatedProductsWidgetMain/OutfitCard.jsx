import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromFavorite} from "../../store/reducer/categoryReducer.js"
import asset from './assets/asset.jpg';
import { RatingStar } from 'rating-star';



function OutfitCard (props) {
const dispatch = useDispatch()
  const RemoveProduct = (id) => {
     dispatch(removeFromFavorite(id))
  }
  var abCard;
  for(var i = 0; i < props.prop1.results.length; i++) {
    if (props.prop1.results[i]['default?']) {
      abCard = props.prop1.results[i]
    }
  }
  var useMe = abCard || props.prop1.results[0]
  if (useMe.photos[0].thumbnail_url) {
  return (
   <div className='relatedProductCards'>
     <svg onClick={() => {RemoveProduct(props.prop1.product_id)}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 OutfitCancel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      <img alt='shoe' src={useMe.photos[0].thumbnail_url}></img>
      <h3>{props.prop1.category}</h3>
      <p>{useMe.name}</p>
      {useMe.sale_price ? <span><span className="sale">{useMe.original_price}</span><span>{useMe.sale_price}</span></span> : <span name={props.prop1.product_id}>{useMe.original_price}</span>}
      <div className="start">
      <RatingStar
       name={props.prop1.product_id} id='userRating-starProducts'
       size={20}
       maxScore={5}
       rating={props.prop1.rating}
       colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
       />
      </div>
    </div>
  )
  } else {
    return<div name={props.prop1.product_id} className='relatedProductCards'>
      <svg onClick={() => {RemoveProduct(props.prop1.product_id)}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 OutfitCancel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
<div onClick={props.addCard} name={props.prop1.product_id}>
<img name={props.prop1.product_id} alt='whatever' src={require('./assets/asset.jpg')}></img>
      <h3 name={props.prop1.product_id}>{props.prop1.category}</h3>
    <p name={props.prop1.product_id}>{useMe.name}</p>
    {useMe.sale_price ? <span><span className="sale">{useMe.original_price}</span><span>{useMe.sale_price}</span></span> : <span name={props.prop1.product_id}>{useMe.original_price}</span>}
    <div className="start">
      <RatingStar
       name={props.prop1.product_id} id='userRating-star'
       size={20}
       maxScore={5}
       rating={props.prop1.rating}
       colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
       />
      </div>
</div>

    </div>
  }


}

export default OutfitCard;