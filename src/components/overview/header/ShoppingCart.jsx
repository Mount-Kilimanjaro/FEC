import React from "react"
import CartCard from "./CartCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import "../../../style/header/header.css";
import {removeFromCart, modifyOrder} from "../../../store/reducer/shoppingCartReducer.js"


export default function ShoppingCart(props) {
    const cart = useSelector(state => state.shoppingCart.cart);
    const {cartVisibility} = props.shoppingCart;
    const dispatch = useDispatch();

    const handleRemoveOrder = (order) => {
        dispatch(removeFromCart(order));
    };
    
    const handleModifyOrder = (value, order) => {
        dispatch(modifyOrder({value, order}));
    };

  return (
    <div id="header_shopping_cart" className={`absolute right-0 top-14 mt-1 bg-white border-2 z-[60] ${cartVisibility ? "w-full md:w-300 " : "w-0 h-0"}`}>
        {cart.length > 0 ?
            <div>
                <div className="mt-10 border-t-2 ">  
                    {cart.map((order,i) => 
                           <CartCard key={i} cart= {{order, handleModifyOrder, handleRemoveOrder, cartVisibility }}/>
                    )}
                </div>
                <div className={`flex flex-row mt-8 p-2 ${cartVisibility ? "" : "hidden"}`}>
                    <button className="border-2 p-3  border-black whitespace-pre grow bg-white hover:bg-blue-300" onClick={() =>{}} >CHECKOUT</button>
                </div>
            </div>
         :
         <div className={`mt-10 border-t-2 ${cartVisibility ? "" : "hidden"}`} >
             <div className={`p-3  border-b-2 ${cartVisibility ? "" : "hidden"}`}>
                <div className="flex items-center justify-around">
                        CARTS EMPTY
                 </div>
            </div>
        </div>
        }  
    </div>
  )
}

