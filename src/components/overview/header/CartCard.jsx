import React from "react"
import trash from "../assets/trash.svg"

export default function CartCard(props) {
    const {order, handleModifyOrder, handleRemoveOrder, cartVisibility, updateStatistic} = props.cart;
  return (
    <div className={`p-3  border-b-2 ${cartVisibility ? "" : "hidden"}`}>
        <div className="flex items-center justify-around">
            <div>
                <img className="w-25 hover:bg-red-500 hover:cursor-pointer" src={trash} alt="trash" name="header_shopping_cart_remove_item" onClick={(e) => updateStatistic(handleRemoveOrder(order),e)}/>
            </div>
            <div className="p-2">
                <input className="text-center text-xl w-40 " type="number" name={order.style_id} min="1" max={order.maxQuantity} value={order.quantity} onChange={(e) => updateStatistic(handleModifyOrder(Number(e.target.value), order),"header_shopping_cart_modifty_order")}/>   
            </div>
            <div>
                <img className="w-75 h-75" src={order.img} alt="thumbnail"/>
            </div>
            <div className="p-2 font-bold">
                <p>SIZE: {order.size}</p>
            </div>
            <div >
                <p><span className="p-2 font-bold">$: </span>{order.quantity * order.price}</p>
            </div>
        </div>
    </div>
  )
}
