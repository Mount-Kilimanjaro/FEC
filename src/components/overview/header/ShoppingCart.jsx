import React, {useEffect} from "react"
import CartCard from "./CartCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import "../../../style/header/header.css";
import {removeFromCart, modifyOrder} from "../../../store/reducer/shoppingCartReducer.js"
import {resetQuantityInputs} from '../helperFn/shoppingCart.js'
import {hideOverFlow, sumTotal} from "../helperFn/shoppingCart.js"


export default function ShoppingCart(props) {
    const updateStatistic = props.updateStatistic;
    const cart = useSelector(state => state.shoppingCart.cart);
    const {cartVisibility} = props.shoppingCart;
    const dispatch = useDispatch();

    const handleRemoveOrder = (order) => {
        dispatch(removeFromCart(order));
    };
    
    const handleModifyOrder = (value, order) => {
        dispatch(modifyOrder({value, order}));
        resetQuantityInputs();
    };

    useEffect(() => {
        if (!props.modalVisible && !cartVisibility) {
            hideOverFlow(false);
        } else {
            hideOverFlow(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartVisibility]);

  return (
    <div id="header_shopping_cart" className={`absolute right-0 top-14 mt-1 bg-white z-[60] ${cartVisibility ? "w-full md:w-[400px] border-2 " : "w-0 h-0"}`} onMouseLeave={() =>props.handleToggleCart()}>
        {cart.length > 0 ?
            <div className="w-full">
                <div className="mt-10 border-t-2 ">  
                    {cart.map((order,i) => 
                           <CartCard key={i} cart= {{order, handleModifyOrder, handleRemoveOrder, cartVisibility, updateStatistic }}/>
                    )}
                </div>
                <div className={`flex p-4 border-b-2 justify-center items-center ${cartVisibility ? "" : "hidden"}`}>
                    <div>
                        <p className="text-lg"> <span className="font-bold">TOTAL: $</span>{`${sumTotal(cart)}`}</p>
                    </div>
                </div>
                <div className={`pr-5 pl-5 flex flex-row mt-8 ${cartVisibility ? "" : "hidden"}`}>
                    <button className=" border-2 p-3 mb-6 border-black whitespace-pre grow bg-white hover:bg-slate-300" name="header_shopping_cart_checkout_button"onClick={(e) =>updateStatistic(null,e)} >CHECKOUT</button>
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

