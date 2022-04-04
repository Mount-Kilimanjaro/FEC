import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage.jsx";
import ProductSelector from "./ProductSelector.jsx";
import ProductInfo from "./ProductInfo.jsx";
import "../../style/overView/overView.css";
import { useSelector } from "react-redux";

export default function Overview(props) {
  const currentItem = useSelector(state => state.category.currentItem);
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
  const changeImgUrl = (url) => {
    setImageIndex(getImageIndex(url));
    setImageUrl(url);
  };
  const setPreviousImage = () => {
    if (imageIndex !== 0) {
      setImageUrl(imagesUrl[imageIndex - 1].url);
      setImageIndex(imageIndex - 1);
    } else {
      setImageUrl(imagesUrl[imagesUrl.length - 1].url);
      setImageIndex(imagesUrl.length - 1);
    }
  };

  const setNextImage = () => {
    if (imageIndex + 1 !== imagesUrl.length) {
      setImageUrl(imagesUrl[imageIndex + 1].url);
      setImageIndex(imageIndex + 1);
    } else {
      setImageUrl(imagesUrl[0].url);
      setImageIndex(0);
    }
  };
  useEffect(() => {
    setStyleIndex(0)
  }, [currentItem]);

  useEffect(() => {
    setImageUrl(currentItem.style[styleIndex >currentItem.style.length ? 0 : styleIndex].photos[0].url);
    setImagesUrl(currentItem.style[styleIndex >currentItem.style.length ? 0 : styleIndex].photos);
  }, [currentItem,styleIndex]);

  return (
    <div id="container" className="container pt-4 h-full mt-10" >
        <div className="image&products flex md:flex-row flex-col items-center">
            <ProductImage img={{imageUrl, imagesUrl, changeImgUrl, carouselNextImage, setNextImage, setPreviousImage}}/>
            <ProductSelector product={currentItem} styleIndex={{styleIndex, handleSetStyleIndex}} imageUrl={imageUrl} handleToggleCart={props.handleToggleCart} />
        </div>
        <div className="information ">
            <ProductInfo product={currentItem}/>
        </div>
                
    </div>
  )
}
