import React from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import shoppingCartImg from "../assets/shopping_cart.svg";
import Search from "../Search.jsx";

export default function Header(props) {
const {handleToggleCart, cartVisibility} = props.cart;

  return (
    <div id="header" className="container flex flex-row justify-between w-full h-60 bg-primary sticky top-0 z-[71]">
        <div>
            <p>logo</p>
        </div>
        <Search/>
        <div className={`flex items-center justify-center w-3/6  md:w-150 md:rounded-l-2xl ${cartVisibility ? "bg-red-300" : ""} bg-blue-300 hover:cursor-pointer `} onClick={() => handleToggleCart()}>
            <img className="h-50 " src={shoppingCartImg} alt="shopping_Cart"/>
        </div>
        <ShoppingCart shoppingCart={{cartVisibility}} handleToggleCart={handleToggleCart} />
    </div>
  )
}
