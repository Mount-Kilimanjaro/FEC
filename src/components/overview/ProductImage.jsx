import React from "react"
import arrowDown from "./assets/down_arrow.png"
import arrowRight from "./assets/right_arrow.png"
import arrowLeft from "./assets/left_arrow.png"

export default function ProductImage(props) {
  const {imageUrl, imagesUrl, changeImgUrl, carouselNextImage, setNextImage, setPreviousImage, updateStatistic} = props.img
  return (
      <div id="productImage" className="container w:full md:w-4/6 h-300 md:h-full ">
          <div id="imageWheel" className="p-2 hidden md:block absolute z-10">
            {imagesUrl.slice(0,5).map((photo,i) => 
            <div key={i} className={`p-0.5 `}>
              <img id="scrollImg" name='overview_productImage_carousel_image' src={photo.url} alt="" className={`border-2 opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-black ${imageUrl === imagesUrl[i].url? "border-b-blue-300 border-b-8 opacity-100" : ""}`} onClick={(e) => updateStatistic(changeImgUrl(photo.url), e.target.name)} />
            </div>
            )}
            {imagesUrl.length > 5 ?             
            <div className="flex mt-8 justify-center">
              <img className="hover:cursor-pointer opacity-50 hover:opacity-100 select-none" name='overview_productImage_carousel_image_next' alt="" onClick={(e) => updateStatistic(carouselNextImage(),e.target.name)} src={arrowDown}/ >
            </div>
            :
            <></>
            }
        </div>
        <div className="container flex flex-row justify-center items-center l w-full h-full">
          <div id="overview_arrow" className="flex md:hidden">
            <img id="productImages_arrowLeft" className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none mr-80" name='overview_productImage_main_arrow_left' alt="" onClick={(e) => updateStatistic(setPreviousImage(),e.target.name)} src={arrowLeft}/ >
            <img id="productImages_arrowRight"className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none" name='overview_productImage_main_arrow_right' alt="" onClick={(e) => updateStatistic(setNextImage(),e.target.name)} src={arrowRight}/ >
          </div>
          <img id="overview_main_img" className="h-full p-3 md:min-h-650" src={imageUrl} alt=""/>
        </div>
      </div>
    )
}
