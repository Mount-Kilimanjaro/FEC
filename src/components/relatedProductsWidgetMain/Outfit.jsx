import React, { useState, useEffect } from "react";
import OutfitCard from './OutfitCard.jsx';
import { useSelector } from "react-redux";

function Outfit (props) {
  const outfitArray = useSelector(state => state.category.myFavorite);
  const [currentCard, setCard] = useState(0);

  const nextBut = () => {
    if (currentCard < outfitArray.length - 3 ) {
      setCard(currentCard + 1)
    }
  }

  const prevBut = () => {
    if (currentCard > 0) {
      setCard(currentCard - 1)
    }
  }

  useEffect(() => {
    const container = document.querySelector('.OutfitContent')
    container.style.transitionDuration = '.8s';
    container.style.transform = `translate( -${currentCard * 245}px)`
  }, [currentCard])


  return (
    <div className='containerr'>
      {(currentCard) === 0 ? <div></div> : <svg onClick={prevBut} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scroll_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>}
<div className='relatedProducts'>

<div className='OutfitContent'>
        {outfitArray.map((value, index) => {
          return <OutfitCard prop1={value} key={index}/>
        })}
      </div>
    </div>
    {(currentCard) === outfitArray.length - 3  ? <div></div> : <svg onClick={nextBut} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 scroll_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>}
    </div>

    )
}

export default Outfit;








