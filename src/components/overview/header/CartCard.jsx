import React from 'react'
import trash from '../assets/trash.svg'

export default function CartCard(props) {
    const {order, handleModifyOrder, handleRemoveOrder, cartVisibility } = props.cart;
  return (
    <div className={`p-3  border-b-2 ${cartVisibility ? "" : "hidden"}`}>
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
}
