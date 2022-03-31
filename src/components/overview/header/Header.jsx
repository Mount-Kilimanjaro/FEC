import React from 'react'

export default function Header() {
  return (
    <div id='header' className='container flex flex-row justify-between w-full p-2 bg-red-300'>
        <div>
            <p>logo</p>
        </div>
        <div className='flex flex-row'>
            <p>search</p>
            <p>Cart</p>
        </div>
    </div>
  )
}
