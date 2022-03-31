import React from 'react';

import ProductImage from './ProductImage.jsx';
import ProductSelector from './ProductSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import '../../style/overView/overView.css';
import { useSelector } from 'react-redux';

export default function Overview() {
    const currentItem = useSelector(state => state.category.currentItem)


    
  return (
    <div id='container' className='container bg-red-500'>
        <div className='image&products flex h-4/5'>
            <ProductImage product={currentItem}/>
            <ProductSelector/>
        </div>
        <div className='information'>
            <ProductInfo product={currentItem}/>
        </div>
    </div>
  )
}
