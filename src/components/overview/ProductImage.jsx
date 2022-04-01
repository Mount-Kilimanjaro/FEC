import React from "react"
import arrowDown from './assets/down_arrow.png'
import arrowRight from './assets/right_arrow.png'
import arrowleft from './assets/left_arrow.png'

export default function ProductImage(props) {
  const {imageUrl, imagesUrl, changeImgUrl,imageIndex, carouselNextImage, setNextImage, setPreviousImage} = props.img
  return (
      <div id="productImage" className="container w:full md:w-4/6 h-300 md:h-full ">
          <div id="imageWheel" className="pt-1 pl-1 hidden md:block ">
            {imagesUrl.slice(0,5).map((photo,i) => <img id='scrollImg' key={i} src={photo.url} alt="" className={`border-2 opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-black ${imageIndex === i ? 'border-b-blue-300 border-b-4 opacity-100' : ''}`} onClick={() => changeImgUrl(photo.url)} />)}
            {imagesUrl.length > 5 ?             
            <div className="flex mt-5 justify-center">
              <img className="hover:cursor-pointer opacity-50 hover:opacity-100 select-none" alt='' onClick={() => carouselNextImage()} src={arrowDown}/ >
            </div>
            :
            <></>
            }
        </div>
        <div className="container flex flex-row justify-center items-center l w-full h-full">
          <div id='overview_arrow' className="flex md:hidden">
            <img className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none mr-80" alt='' onClick={() => setPreviousImage()} src={arrowleft}/ >
            <img className="overview_image_arrows hover:cursor-pointer opacity-50 hover:opacity-100 select-none" alt='' onClick={() => setNextImage()} src={arrowRight}/ >
          </div>
          <img id="overview_main_img" className="h-full p-3 md:min-h-590" src={imageUrl} alt=""/>
        </div>
      </div>
    )
}
