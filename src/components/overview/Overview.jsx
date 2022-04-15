import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage.jsx";
import ProductSelector from "./ProductSelector.jsx";
import ProductInfo from "./ProductInfo.jsx";
import "../../style/overView/overView.css";
import { useSelector } from "react-redux";
import {updateStatistic} from '../../utils/siteStatistic.js';
import Modal from "./Modal.jsx";

export default function Overview(props) {
  const currentItem = useSelector(state => state.category.currentItem);
  const cart = useSelector(state => state.shoppingCart.cart);
  const [styleIndex, setStyleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imagesUrl, setImagesUrl] = useState([]);

  const getImageIndex = (url) => {
    return imagesUrl.map((obj,i) => {
      if (obj.url === url) {
        return i;
      }
      return null;
    }).filter(a => a!==null)[0];
  };

  const handleSetStyleIndex = (index) => {
    setImageIndex(0);
    setStyleIndex(index);
  };

  const carouselNextImage = () => {
    const imgArr = [...imagesUrl];
    imgArr.push(imgArr.shift());
    setImagesUrl(imgArr);
  };

  const changeImgUrl = (url,i) => {
    setImageIndex(i);
    setImageUrl(url);
  };
  const setPreviousImage = () => {
    if (imageIndex !== 0) {
      setImageUrl(imagesUrl[imageIndex - 1]);
      setImageIndex(imageIndex - 1);
    } else {
      setImageUrl(imagesUrl[imagesUrl.length - 1]);
      setImageIndex(imagesUrl.length - 1);
    }
  };

  const setNextImage = () => {
    if (imageIndex + 1 !== imagesUrl.length) {
      setImageUrl(imagesUrl[imageIndex + 1]);
      setImageIndex(imageIndex + 1);
    } else {
      setImageUrl(imagesUrl[0]);
      setImageIndex(0);
    }
  };

  useEffect(() => {
    setImageUrl(currentItem.style[0].photos[0]);
    setImagesUrl(currentItem.style[0].photos);
    setStyleIndex(0);
  }, [currentItem]);

  useEffect(() => {
    if (currentItem.style[styleIndex]) {
      setImageUrl(currentItem.style[styleIndex].photos[0]);
      setImagesUrl(currentItem.style[styleIndex].photos);
    }
  }, [styleIndex]);


  return (
    <div id="container" className="container pt-4 h-full mt-10 "  >
        <div className="image&products flex md:flex-row flex-col items-center">
            <ProductImage img={{imageUrl, imagesUrl, changeImgUrl, carouselNextImage, setNextImage, setPreviousImage, updateStatistic}}/>
            <ProductSelector product={currentItem} styleIndex={{styleIndex, handleSetStyleIndex}} imageUrl={imageUrl} handleToggleCart={props.handleToggleCart} cart={cart} updateStatistic={updateStatistic}/>
        </div>
        <div className="information">
            <ProductInfo product={currentItem}/>
        </div>
        <Modal/>
    </div>
  )
}
