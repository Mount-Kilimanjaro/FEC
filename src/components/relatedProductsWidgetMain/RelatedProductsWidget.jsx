import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";
import axios from 'axios';
import ComparisonM from "./ComparisonModal.jsx"
import {addToFavorite} from "../../store/reducer/categoryReducer.js"


function RelatedProductsWidget () {
const dispatch = useDispatch()

  const outfitArray = useSelector(state => state.category.myFavorite);
  const myItem = useSelector(state => state.category.currentItem);
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }
  const [relatedProductA, setRPA] = useState([]);
  const [compareThis, setCompare] = useState({});
  const [compareFeat, setFeat]    = useState({})
  const [compareThisHelper, setCompareHelper] = useState({});
  const [showModal, setShow] = useState(false);
  const [OutfitStuff, setOutfit] = useState([]);
  useEffect( () => {
    if(myItem.id) {
    const getData = async () => {
      try{
          var resultt = []
          const response = await axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}/styles`,{headers}))).then(
          (data) => {
            for(var i = 0; i < data.length; i++) {
              resultt.push(data[i].data)
            }
          }
            )

              const responseee = axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}`,{headers}))).then(
          (data) => {
            var result = []
            for(var i = 0; i < data.length; i++) {
              result.push(data[i].data)
              resultt[i].category = data[i].data.category
            }
            return setCompareHelper(result);
          }
            )

            const responsee =  await axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${endpoint}&sort="relevant"&count=1000`,{headers}))).then(
                (data) => {

                  var result = []

            for(var i = 0; i < data.length; i++) {

              var average = 0;
              for (var x = 0; x < data[i].data.results.length; x++) {

                average = average + data[i].data.results[x].rating
              }
              average = average/data[i].data.results.length
              result.push(average);
            }
            for (var z = 0; z < resultt.length; z ++) {
              resultt[z]['rating'] = result[z]
            }

            })
            await setRPA(resultt)



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
  if (compareThisHelper[i].id === Number(event.target.attributes.name.nodeValue)) {
    var result = compareThisHelper[i];
  setCompare(compareThisHelper[i]);
  }
}
// iterate through feature of both item 1 and 2
var compareObj = {};
for (var x = 0; x < 5; x ++) {
  if (result.features[x]) {
    if (compareObj[result.features[x].feature]) {
      compareObj[result.features[x].feature].right = result.features[x].value;
    } else {
      compareObj[result.features[x].feature] = {};
      compareObj[result.features[x].feature].right = result.features[x].value;
    }
  }
  if (myItem.features[x]) {

    if (compareObj[myItem.features[x].feature]) {
      compareObj[myItem.features[x].feature].left = myItem.features[x].value;
    } else {
      compareObj[myItem.features[x].feature] = {};
      compareObj[myItem.features[x].feature].left = myItem.features[x].value;
    }
  }
}
setFeat(compareObj);
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
      if (relatedProductA[i].product_id === event.target.attributes.name.nodeValue) {
        var result = relatedProductA[i];
        dispatch(addToFavorite(result))
      }
    }
  }



  return (
    <div id='relatedMain' className="hidden md:flex">
      <h1>Related Products</h1>
      < RelatedProducts addCard={addCard} compare={comparisonChart} arr={relatedProductA}/>
      {outfitArray.length > 0 ? <h1>Outfit</h1> : <div></div>}
      {outfitArray.length > 0 ? < Outfit outfitCards={OutfitStuff}/> : <div></div>}



      < ComparisonM closeModal={closeModal} showModal={showModal} feat={compareFeat} prop1={compareThis}/>
    </div>
  )

}

export default RelatedProductsWidget;