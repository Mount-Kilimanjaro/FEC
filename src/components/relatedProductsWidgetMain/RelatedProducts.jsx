import React, { useState, useEffect } from "react";
import Card from './RelatedProductCard.jsx';
import { useSelector } from "react-redux";

function RelatedProducts (props) {
  const myItem = useSelector(state => state.category.currentItem);
const [currentCard, setCard] = useState(0)

  const nextBut = () => {
    setCard(currentCard + 1)
  }

  const prevBut = () => {
    setCard(currentCard - 1)
  }

  useEffect(() => {
    const container = document.querySelector('.relatedProductsContent')
    container.style.transitionDuration = '.8s';
    container.style.transform = `translate( -${currentCard * 245}px)`
  }, [currentCard])

  return (
    <div className='containerr'>
      <svg onClick={prevBut} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scroll_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
<div className='relatedProducts'>

<div className='relatedProductsContent'>
        {props.arr.map((value, index) => {
          return <Card addCard={props.addCard} prop2={props.compare} prop1={value} key={index}/>
        })}
      </div>
    </div>
    <svg onClick={nextBut} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 scroll_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>
    </div>

    )
}

export default RelatedProducts;








