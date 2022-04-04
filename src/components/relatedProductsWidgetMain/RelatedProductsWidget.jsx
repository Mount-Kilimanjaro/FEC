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

  // send api request for each realted item
  // GET /products/:product_id/styles
  // store it in []
  console.log('itemId', myItemId);
  useEffect(() => {
    let relatedCalls = [];
    const getData = async () => {
      try{
        const gg = await myItem.related.map(async (value) => {
          const getReq = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${value}/styles`, {headers});
        const cpyrelated = [...relatedProductA]
        cpyrelated.push(getReq.data.results[0])
         setRPA(cpyrelated) 
         console.log('relatedpa', relatedProductA)
        })



      }
      catch(err) {
        console.log('error in RP API call', err);

      }

    }
    getData();
    setRPA(relatedCalls);


  }, [myItemId])




  return (
    <div id='relatedMain'>
      < RelatedProducts arr={relatedProductA}/>
      < Outfit/>
    </div>
  )
}

export default RelatedProductsWidget;