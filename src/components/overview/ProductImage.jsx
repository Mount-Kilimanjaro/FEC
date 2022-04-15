import React, { useState } from "react"
import arrowDown from "./assets/down_arrow.png"
import arrowRight from "./assets/right_arrow.png"
import arrowLeft from "./assets/left_arrow.png"
import Modal from "./Modal"

export default function ProductImage(props) {
  const {imageUrl, imagesUrl, changeImgUrl, carouselNextImage, setNextImage, setPreviousImage, updateStatistic} = props.img
  const [modal , toggleModal] = useState(false)
  return (
      <div id="productImage" className="container w:full md:w-4/6 h-300 md:h-full ">
          <div id="imageWheel" className="p-4 hidden md:block absolute z-v">
            {imagesUrl.slice(0,5).map((photo,i) => 
            <div key={i} className={`p-0.5`}>
              <img id="scrollImg" name='overview_productImage_carousel_image' src={photo.thumbnail_url} alt="" className={`border-2 opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-black ${imageUrl.thumbnail_url === imagesUrl[i].thumbnail_url? "border-b-[#79592B] border-b-8 opacity-100" : ""}`} onClick={(e) => updateStatistic(changeImgUrl({url:photo.url,thumbnail_url:photo.thumbnail_url},i), e)} />
            </div>
            )}
            {imagesUrl.length > 5 ?             
            <div className="flex mt-8 justify-center">
              <img className="hover:cursor-pointer opacity-50 hover:opacity-100 select-none" name='overview_productImage_carousel_image_next' alt="" onClick={(e) => updateStatistic(carouselNextImage(),e)} src={arrowDown}/ >
            </div>
            :
            <></>
            }
        </div>
        <div className="container flex flex-row justify-center items-center w-full h-full p-3">
          <div id="overview_arrow" className="flex md:hidden">
            <img id="productImages_arrowLeft" className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none mr-80" name='overview_productImage_main_arrow_left' alt="" onClick={(e) => updateStatistic(setPreviousImage(),e)} src={arrowLeft}/ >
            <img id="productImages_arrowRight"className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none" name='overview_productImage_main_arrow_right' alt="" onClick={(e) => updateStatistic(setNextImage(),e)} src={arrowRight}/ >
          </div>
          <img id="overview_main_img" className={`h-full ml-3 md:min-h-650 md:hover:cursor-pointer ${modal ? 'opacity-0':''}`} src={imageUrl.thumbnail_url} alt="" name="overview_productImage_main_img"
          onClick={(e) => {
            if (window.innerWidth < 766) {
              toggleModal(false);
            }else {
              updateStatistic(toggleModal(true),e)
              toggleModal(true);
            }
            }}/>
        </div>
        <Modal visibility={modal} toggleModal={toggleModal}>
        <div className=" flex flex-row justify-center items-center h-full">
          <div id="overview_arrow" className="flex bg-black">
            <img id="productImages_arrowLeft" className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none absolute bottom-2/4" name='overview_productImage_main_arrow_left' alt="" onClick={(e) => updateStatistic(setPreviousImage(),e)} src={arrowLeft}/ >
            <img id="" className=" h-900" src={imageUrl.url} alt=""/>
            <img id="productImages_arrowRight"className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none absolute bottom-2/4 right-0" name='overview_productImage_main_arrow_right' alt="" onClick={(e) => updateStatistic(setNextImage(),e)} src={arrowRight}/ >
          </div>
        </div>
        </Modal>
      </div>
    )
}
