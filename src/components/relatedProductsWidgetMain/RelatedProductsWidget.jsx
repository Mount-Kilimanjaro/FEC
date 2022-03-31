import React from "react";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";


function RelatedProductsWidget () {


  return (
    <div id='relatedMain'>
      <h2>Related Products</h2>
      < RelatedProducts/>
      <h2>Your Outfit</h2>
      < Outfit/>
    </div>
  )
}

export default RelatedProductsWidget;