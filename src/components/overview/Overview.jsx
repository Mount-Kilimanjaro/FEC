import React, { useState, useEffect } from 'react';
import ProductImage from './ProductImage.jsx';
import ProductSelector from './ProductSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import '../../style/overView/overView.css';
import { useSelector } from 'react-redux';

export default function Overview() {
  const currentItem = useSelector(state => state.category.currentItem);
  const [styleIndex, setStyleIndex] = useState(0);
  const [imageUrl,setImageUrl] = useState('');
  const [imagesUrl,setImagesUrl] = useState([]);
  
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
    console.log(imageUrl)
  }, [currentItem]);
  

  return (
    <div id='container' className='container pt-4'>
        <div className='image&products flex h-4/5'>
          <div id='imageWheel' className='flex flex-col pt-1 pl-1'>
            {imagesUrl.slice(0,5).map((photo,i) => <img key={i} src={photo.url} alt='' className='border-2 opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-black' onClick={() => changeImgUrl(photo.url)} />)}
            {imagesUrl.length > 5 ?             
            <div className='flex pt-4 ml-5'>
              <svg className='hover:cursor-pointer opacity-50 hover:opacity-100 select-none' onClick={() => nextImage()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            </div>
            :
            <></>
            }

            
          </div>
            <ProductImage product={currentItem} imageUrl={imageUrl}/>
            <ProductSelector/>
        </div>
        <div className='information'>
            <ProductInfo product={currentItem}/>
        </div>
    </div>
  )
}
