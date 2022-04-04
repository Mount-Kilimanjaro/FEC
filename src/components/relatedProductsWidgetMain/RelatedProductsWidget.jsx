import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";
import axios from 'axios';


function RelatedProductsWidget () {
  const Myitem = useSelector(state => state.category.currentItem);
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }
  const [relatedProductA, setRPA] = useState([]);

  // send api request for each realted item
  // GET /products/:product_id/styles
  // store it in []
  let relatedCalls = [];
  useEffect(() => {
    const getData = async () => {
      try{
        Myitem.related.map(async (value) => {
          const call = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${value}/styles`, {headers});
          relatedCalls.push(call.data.results[0])
        })
          setRPA(relatedCalls);


      } 
      catch(err) {
        console.log('error in RP API call', err);

      }

    }
    getData();



  }, [Myitem])




  return (
    <div id='relatedMain'>
      < RelatedProducts array={relatedProductA}/>
      < Outfit/>
    </div>
  )
}

export default RelatedProductsWidget;