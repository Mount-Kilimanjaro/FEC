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
  const [compareThisHelper, setCompareHelper] = useState({});
  const [showModal, setShow] = useState(false);
  const [OutfitStuff, setOutfit] = useState([]);
  useEffect( () => {
    if(myItem.id) {
    const getData = async () => {
      try{
          const response = await axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}/styles`,{headers}))).then(
          (data) => {
            console.log(data)
            var result = []
            for(var i = 0; i < data.length; i++) {
              result.push(data[i].data)
            }
            return setRPA(result);

          }
            ).then(() => {
              const response = axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}`,{headers}))).then(
          (data) => {
            var result = []
            for(var i = 0; i < data.length; i++) {
              result.push(data[i].data)
            }
            return setCompareHelper(result);
          }
            )
            })

        }
      catch(err) {
        console.log('error in RP API call', err);
      }
    }
    getData();
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, [myItem])

useEffect ( () => {

})

const comparisonChart = (event) => {
for (var i = 0; i < relatedProductA.length; i++) {
  console.log(compareThisHelper[i].id, event.target.attributes.name.nodeValue )
  if (compareThisHelper[i].id === Number(event.target.attributes.name.nodeValue)) {
    var result = compareThisHelper[i];
  setCompare(compareThisHelper[i]);
  }
}
// iterate through feature of both item 1 and 2
var compareObj = {};
for (var x = 0; x < 5; x ++) {
  console.log( result, "hello", myItem);
  if (result.features[x]) {
    if (compareObj[result.features[x].feature]) {
      compareObj[result.features[x].feature].right = result.features[x].value;
    } else {
      compareObj[result.features[x].feature] = {};
      compareObj[result.features[x].feature].right = result.features[x].value;
    }
  }
  if (myItem.features[x]) {

    if (compareObj[myItem.features[x]]) {
      compareObj[myItem.features[x].feature].left = myItem.features[x].value;
    } else {
      compareObj[myItem.features[x].feature] = {};
      compareObj[myItem.features[x].feature].left = myItem.features[x].value;
    }
  }
}
console.log(compareObj);
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