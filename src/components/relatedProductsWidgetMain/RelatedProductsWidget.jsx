import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";


function RelatedProductsWidget () {
  const Myitem = useSelector(state => state.category.currentItem);
console.log('my log', Myitem);

            useState()

  return (
    <div id='relatedMain'>
      < RelatedProducts/>
      < Outfit/>
    </div>
  )
}

export default RelatedProductsWidget;