import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage.jsx";
import ProductSelector from "./ProductSelector.jsx";
import ProductInfo from "./ProductInfo.jsx";
import "../../style/overView/overView.css";
import { useSelector } from "react-redux";

export default function Overview() {
  const currentItem = useSelector(state => state.category.currentItem);
  const [styleIndex, setStyleIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);
  const [sku, setSku] = useState("");

  const nextImage = () => {
    const imgArr = [...imagesUrl];
    imgArr.push(imgArr.shift())
    setImagesUrl(imgArr)
  };
  
  const changeImgUrl = (url) => {
    setImageUrl(url)
  };

  useEffect(() => {
    setImageUrl(currentItem.style[styleIndex].photos[0].url);
    setImagesUrl(currentItem.style[styleIndex].photos);
  }, [currentItem,styleIndex]);


  return (
    <div id="container" className="container pt-4 h-full" >
        <div className="image&products flex">
            <ProductImage img={{imageUrl, imagesUrl, changeImgUrl, nextImage}}/>
            <ProductSelector product={currentItem} styleIndex={{styleIndex, setStyleIndex}}/>
        </div>
        <div className="information ">
            <ProductInfo product={currentItem}/>
        </div>
    </div>
  )
}
