import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asset from './assets/asset.jpg';
import { RatingStar } from 'rating-star';
import { updateStatistic } from '../../utils/siteStatistic.js';



function RelatedProductCard (props) {
  var abCard;
  for(var i = 0; i < props.prop1.results.length; i++) {
    if (props.prop1.results[i]['default?']) {
      abCard = props.prop1.results[i]
    }
  }
  var useMe = abCard || props.prop1.results[0]
 if (useMe.photos[0].thumbnail_url) {
  return (
   <div name={props.prop1.product_id} className='relatedProductCards'>
     <svg onClick={(event) => {
       updateStatistic(null, 'Related Products Comparison Modal')
       props.prop2(event)}} xmlns="http://www.w3.org/2000/svg" name={props.prop1.product_id} className="h-5 w-5 comparison_but" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" name={props.prop1.product_id} d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
<div onClick={props.addCard} name={props.prop1.product_id}>
<img alt='shoe' src={useMe.photos[0].thumbnail_url} name={props.prop1.product_id}></img>
      <h3 name={props.prop1.product_id}>{props.prop1.category}</h3>
      <p name={props.prop1.product_id}>{useMe.name}</p>
      {useMe.sale_price ? <span><span className="sale">{useMe.original_price}</span><span>{useMe.sale_price}</span></span> : <span>{useMe.original_price}</span>}
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

    </div>
  )
 } else {
    return<div name={props.prop1.product_id} className='relatedProductCards'>
      <svg onClick={(event) => {
       updateStatistic(null, 'Related Products Comparison Modal')
       props.prop2(event)}} xmlns="http://www.w3.org/2000/svg" name={props.prop1.product_id} className="h-5 w-5 comparison_but" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" name={props.prop1.product_id} d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
<div onClick={props.addCard} name={props.prop1.product_id}>
<img name={props.prop1.product_id} alt='whatever' src={require('./assets/asset.jpg')}></img>
      <h3 name={props.prop1.product_id}>{props.prop1.category}</h3>
    <p name={props.prop1.product_id}>{useMe.name}</p>
    {useMe.sale_price ? <span><span className="sale">{useMe.original_price}</span><span>{useMe.sale_price}</span></span> : <span >{useMe.original_price}</span>}
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

export default RelatedProductCard;