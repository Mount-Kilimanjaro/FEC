import React from 'react';

export default function ProductInfo(props) {
    const {slogan, description} = props.product;
  return (
    <div>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl'>{slogan}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}
