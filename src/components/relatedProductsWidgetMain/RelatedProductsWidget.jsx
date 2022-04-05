import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";
import axios from 'axios';


function RelatedProductsWidget () {
  const myItem = useSelector(state => state.category.currentItem);
  const myItemId = useSelector(state => state.category.currentItemId);
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }
  const [relatedProductA, setRPA] = useState([]);


  console.log('itemId', myItemId);
  useEffect( () => {
    if(myItem.id) {
    const getData = async () => {
      try{
          const response = await axios.all(myItem.related.map((endpoint) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${endpoint}/styles`,{headers}))).then(
          (data) => data)
          setRPA(response);
        }
      catch(err) {
        console.log('error in RP API call', err);
      }
    }
    getData();
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, [myItem])




  return (
    <div id='relatedMain'>
      < RelatedProducts arr={relatedProductA}/>
      < Outfit/>
    </div>
  )

}

export default RelatedProductsWidget;