import React from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import shoppingCartImg from "../assets/shopping_cart.svg";
import Search from "../Search.jsx";

export default function Header(props) {
const {handleToggleCart, cartVisibility} = props.cart;

  return (
    <div id="header" className="container flex flex-row justify-between  h-60 bg-primary sticky top-0 z-[71]">
        <div>
            <p>logo</p>
        </div>
        <div className={`flex items-center justify-center w-3/6  md:w-150 md:rounded-l-2xl ${cartVisibility ? "bg-blue-400" : ""} bg-secondary hover:cursor-pointer hover:bg-blue-400 select-none`} onMouseEnter={() => handleToggleCart(false)}>
            <img className="h-50 " src={shoppingCartImg} alt="shopping_Cart"/>
        </div>
        <ShoppingCart shoppingCart={{cartVisibility}}/>
        <Search/>
    </div>
  )
}
