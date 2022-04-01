import React from 'react'
import "../../../style/header/header.css";


export default function ShoppingCart(props) {
    const {shoppingCart} = props.shoppingCart;
  return (
    <div id='header_shopping_cart' className={`absolute right-0 top-14 mt-1   bg-blue-300 z-0 ${shoppingCart ? 'w-300  h-300' : 'w-150 h-0'}`}>
    </div>
  )
}
