import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";
import axios from 'axios';


function RelatedProductsWidget () {
  const myItem = useSelector(state => state.category.currentItem);
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }
  const [relatedProductA, setRPA] = useState([]);

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



            useState()

  return (
    <div id='relatedMain'>
      <h1>Related Products</h1>
      < RelatedProducts arr={relatedProductA}/>
      < Outfit/>
    </div>
  )

}

export default RelatedProductsWidget;