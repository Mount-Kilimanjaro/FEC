import React, { useState } from "react"
import ShoppingCart from "./ShoppingCart.jsx"
import shoppingCartImg from '../assets/shopping_cart.svg'


export default function Header() {
  const [shoppingCart, toggleShoppingCart] = useState(false);

  return (
    <div id="header" className="container flex flex-row justify-between  h-60 bg-primary sticky top-0 z-10">
        <div>
            <p>logo</p>
        </div>
        <div className="flex items-center justify-center w-3/6  md:w-150 md:rounded-l-2xl bg-blue-300 hover:cursor-pointer hover:bg-red-300 select-none" onClick={() => toggleShoppingCart(!shoppingCart)}>
            <img className="h-50 " src={shoppingCartImg} alt='shopping_Cart'/>
        </div>
        <ShoppingCart shoppingCart={{shoppingCart}}/>
    </div>
  )
}
