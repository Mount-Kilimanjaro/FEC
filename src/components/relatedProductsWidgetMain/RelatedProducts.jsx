import React from 'react';
import Card from './RelatedProductCard.jsx';

function RelatedProducts (props) {

  let currentCard = 0;
  const nextBut = () => {
    currentCard++;
    const container = document.querySelector('.relatedProductsContent')
    container.style.transitionDuration = '.8s';
    container.style.transform = `translate( -${currentCard * 245}px)`
  }

  const prevBut = () => {
    currentCard--;
    console.log(currentCard);
    const container = document.querySelector('.relatedProductsContent')
    container.style.transitionDuration = '.8s';
    container.style.transform = `translate( -${currentCard * 245}px)`
  }
  return (
    <div className='relatedProducts'>
      <button id='prev' onClick={prevBut}>prev</button>
      <div className='relatedProductsContent'>
        {props.arr.map((value, index) => {
          return <Card prop1={value} key={index}/>
        })}
      </div>
      <button id='next' onClick={nextBut}>next</button>
    </div>
    )
}

export default RelatedProducts;








