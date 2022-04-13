import React,{useState} from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import shoppingCartImg from "../assets/shopping_cart.svg";
import Search from "../Search.jsx";
import CheckoutModal from "./CheckoutModal.jsx";
import logo from '../assets/logo.png'


export default function Header(props) {
const {handleToggleCart, cartVisibility} = props.cart;
const [modalVisible, toggleModalVisible] = useState(false);
const [checkoutModal, setCheckoutModal] = useState(false);
  return (
    <div id="header" className="container flex flex-row justify-between w-full h-60 bg-primary sticky top-0 z-[71]">
        <div className="flex">
            <img className="h-[60px] ml-4" src={logo} alt="logo"/>
            <div className="ml-1">
              <p className="text-xl">Kilimanjaro</p>
              <p className="ml-10 text-[#79592B]">STORE</p>
            </div>
        </div>
        <Search cartModal={{handleToggleCart,cartVisibility}} modal={{modalVisible, toggleModalVisible}} toggleBlurBG={props.toggleBlurBG}/>
        <div className={`flex items-center justify-center w-3/6  md:w-150 md:rounded-l-2xl ${cartVisibility ? "bg-slate-300" : ""}  hover:cursor-pointer `} 
        onClick={() => {
          toggleModalVisible(false)
          handleToggleCart(!cartVisibility)
          }}>
            <img className="h-50 " src={shoppingCartImg} alt="shopping_Cart"/>
        </div>
        <ShoppingCart shoppingCart={{cartVisibility}} handleToggleCart={handleToggleCart} modalVisible={modalVisible} />
          <CheckoutModal visibility={checkoutModal}/>
    </div>
  )
}
