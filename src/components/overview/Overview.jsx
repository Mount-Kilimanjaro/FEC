import React, { useEffect } from 'react';
import axios from 'axios';
import ProductImage from './ProductImage.jsx';
import ProductSelector from './ProductSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import '../../style/overView/overView.css';
import { useSelector } from 'react-redux';

export default function Overview() {
    const currentItem = useSelector(state => state.category.currentItem)

    // useEffect(() => {
    //     const fetchData = async() => {

    //     };

    // }, [])
    
  return (
    <div id='container' className='container bg-red-500 h-full'>
        <div className='image&products flex h-4/5'>
            <ProductImage/>
            <ProductSelector/>
        </div>
        <div className='information'>
            <ProductInfo product={currentItem}/>
        </div>
    </div>
  )
}
