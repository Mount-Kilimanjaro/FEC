import React from 'react'
import ProductSelector from './ProductSelector'

export default function ProductImage(props) {
  return (
      <div id='productImage' className='container w-4/6 hidden md:block'>
        <div className='container flex flex-col items-center h-full w-full'>
          <img className='h-full' src={props.imageUrl} alt=""/>
        </div>
      </div>
    )
}
