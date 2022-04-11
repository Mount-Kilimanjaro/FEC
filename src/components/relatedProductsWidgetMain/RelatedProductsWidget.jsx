import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";
import axios from 'axios';
import ComparisonM from "./ComparisonModal.jsx"


function RelatedProductsWidget () {
  const myItem = useSelector(state => state.category.currentItem);
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }
  const [relatedProductA, setRPA] = useState([]);
  const [compareThis, setCompare] = useState({});
  const [showModal, setShow] = useState(false);
  const [OutfitStuff, setOutfit] = useState([]);
  useEffect( () => {
    if(myItem.id) {
    const getData = async () => {
      try{
          const response = await axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}/styles`,{headers}))).then(
          (data) => {
            var result = []
            for(var i = 0; i < data.length; i++) {
              result.push(data[i].data.results[0])
            }
            return setRPA(result);
          }
            )

        }
      catch(err) {
        console.log('error in RP API call', err);
      }
    }
    getData();
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, [myItem])

const comparisonChart = (event) => {
for (var i = 0; i < relatedProductA.length; i++) {
  if (relatedProductA[i].style_id === Number(event.target.attributes.name.nodeValue)) {
  setCompare(relatedProductA[i]);
  }
}
// document.getElementById('root').className = "is-blurred"
 setShow(true);
}

const closeModal = () => {
  if (showModal) {
    setShow(false);
  } else {
    setShow(true);
  }
  }

  const addCard = (event) => {
    for (var i = 0; i < relatedProductA.length; i++) {
      if (relatedProductA[i].style_id === Number(event.target.attributes.name.nodeValue)) {
        var result = relatedProductA[i];
        var arr = OutfitStuff;
        arr.push(result);
      setOutfit(arr);
      console.log(OutfitStuff);
      }
    }
  }



  return (
    <div id='relatedMain'>
      <h1>Related Products</h1>
      < RelatedProducts addCard={addCard} compare={comparisonChart} arr={relatedProductA}/>
      <h1>Outfit</h1>
      < Outfit outfitCards={OutfitStuff}/>
      < ComparisonM closeModal={closeModal} showModal={showModal} prop1={compareThis}/>
    </div>
  )

}

export default RelatedProductsWidget;