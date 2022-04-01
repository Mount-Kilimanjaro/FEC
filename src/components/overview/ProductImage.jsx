import React from "react"

export default function ProductImage(props) {
  const {imageUrl, imagesUrl, changeImgUrl, nextImage} = props.img
  return (
      <div id="productImage" className="container w-4/6 hidden md:block">
          <div id="imageWheel" className="flex flex-col pt-1 pl-1">
            {imagesUrl.slice(0,5).map((photo,i) => <img id='scrollImg' key={i} src={photo.url} alt="" className="border-2 opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-black p-1" onClick={() => changeImgUrl(photo.url)} />)}
            {imagesUrl.length > 5 ?             
            <div className="flex pt-4 ml-7">
              <svg className="hover:cursor-pointer opacity-50 hover:opacity-100 select-none" onClick={() => nextImage()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            </div>
            :
            <></>
            }
        </div>
        <div className="container flex flex-col items-center h-full w-full">
          <img className="h-full p-3" src={imageUrl} alt=""/>
        </div>
      </div>
    )
}
