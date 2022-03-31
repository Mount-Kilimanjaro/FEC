import React from "react";
import Outfit from "./Outfit.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import "../../style/relatedProductsStyles/relatedProducts.css";


function RelatedProductsWidget () {


  return (
    <div id='relatedMain'>
      < RelatedProducts/>
      < Outfit/>
    </div>
  )
}

export default RelatedProductsWidget;