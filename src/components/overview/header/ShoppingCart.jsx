import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../../style/header/header.css";
import trash from '../assets/trash.svg'
import {removeFromCart, modifyOrder} from '../../../store/reducer/shoppingCartReducer.js'


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
    <div id="header_shopping_cart" className={`absolute right-0 top-14 mt-1 bg-white border-2 z-0 ${cartVisibility ? "w-full md:w-300 " : "w-0 h-0"}`}>
        <div className="mt-10 border-t-2 ">  
            {cart.map((order,i) => {
                return (
                    <div className={`p-3  border-b-2 ${cartVisibility ? "" : "hidden"}`} key={i}>
                        <div className="flex items-center justify-around">
                            <div className="p-2">
                                <input className="text-center text-xl w-40 " type="number" name={order.style_id} min="1" max={order.maxQuantity} value={order.quantity} onChange={(e) => handleModifyOrder(e.target.value, order)}/>   
                            </div>
                            <div>
                                <img className="w-75 h-75" src={order.img} alt='thumbnail'/>
                            </div>
                            <div className="p-2 font-bold">
                                <p>SIZE: {order.size}</p>
                            </div>
                            <div>
                                <img className="w-25 hover:bg-red-500 hover:cursor-pointer" src={trash} alt="trash" onClick={() => handleRemoveOrder(order)}/>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
        <div className={`flex flex-row mt-8 p-2 ${cartVisibility ? "" : "hidden"}`}>
            <button className="border-2 p-3  border-black whitespace-pre grow bg-white hover:bg-blue-300" onClick={() =>{}} >CHECKOUT</button>
        </div>

    </div>
  )
}

