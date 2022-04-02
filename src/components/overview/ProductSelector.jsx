import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addToCart } from "../../store/reducer/shoppingCartReducer.js";


export default function ProductSelector(props) {
  const {product} = props;
  const {styleIndex, handleSetStyleIndex} = props.styleIndex;
  const [quantity, setQuantity] = useState(null);
  const [order, setOrder] = useState({});
  const skus = product.style[styleIndex].skus;
  
  const dispatch = useDispatch();

  const handleSizeChange = (sku) => {
    setQuantity(skus[sku].quantity);
    const item = {...order};
    item.sku = sku;
    item.size = skus[sku].size;
    setOrder(item);
  };


  const handleSetStyle = (index) => {
    setOrder({});
    setQuantity(0);
    handleSetStyleIndex(index);
    const targetSelectSize = document.querySelector("#overview_select_size");
    const targetSelectQuantity = document.querySelector("#overview_select_quantity");
    targetSelectSize.value = "DEFAULT";
    targetSelectQuantity.value = "DEFAULT";
  };

  const handleAddQuantity = (quantity) => {
    const item = {...order};
    item.quantity = Number(quantity);
    setOrder(item);
  };

  const handleAddToCart = () => {
    if(!order.quantity || !order.sku || !order.size) {
      return alert("Select item and size before adding to bag");
    }
    const newOrder = {...order};
    newOrder.img = product.style[styleIndex].photos[0].url;
    newOrder.style_id = product.style[styleIndex].style_id;
    newOrder.maxQuantity = Number(quantity);
    dispatch(addToCart(newOrder));
  };

  return (
    <div id="productSelector" className="md:w-3/6 w-full pl-6  pr-5">
      <div className="p-2">
        stars
      </div>
      <div id="productCategory" className="p-2 text-xl">
        <h1>{product.category}</h1>
      </div>
      <div id="productName" className="p-2 text-3xl">
        <h1>{product.name}</h1>
      </div>
      <div id="productPrice" className="p-2 text-xl">
        <h1>{`$${product.default_price}`}</h1>
      </div>
      <div id="styleSelector" className="p-2 text-xl">
        <h1><span className="font-bold">{`STYLE >`}  </span>{product.style[styleIndex].name}</h1>
        <div id="style" className="flex flex-row flex-wrap gap-5 p-4 justify-center">
          {product.style.map((style, i) => {
            return (
              <img key={i} id="styleThumbNail" className={`rounded-full hover:cursor-pointer border-2 hover:border-black hover:drop-shadow-lg ${styleIndex === i ? "border-blue-300 border-4" : ""}`} src={product.style[i].photos[0].url} alt="" onClick={() => handleSetStyle(i)}/>
            )})}
        </div>
      </div>
      <div id="overview_selector">
        <div className="flex justify-between p-5">
          <div id="size">
            <select id="overview_select_size" className="border-2 p-3 border-black " name="size"  defaultValue={"DEFAULT"} onChange={(e) => {
              handleSizeChange(e.target.value)
            }}>
              <option value="DEFAULT" disabled>SELECT SIZE</option>
              {Object.keys(skus).map((sku,i) => 
              <option key={i} value={sku} >{skus[sku].size}</option>
              )}
            </select>
          </div>
          <div id="quantity" className="">
            <select id="overview_select_quantity" className="border-2 p-3 border-black" name="quantity" defaultValue={"DEFAULT"} onChange={(e) => handleAddQuantity(e.target.value)}>
              <option  value="DEFAULT" disabled>QUANTITY</option>
              {Array.from(Array(quantity), (num, i) => {
                if(quantity) {
                  return <option key={i}>{i+1}</option>
                } else {
                  return "";
                }
              })}
            </select>
          </div>
        </div>
        <div id="styleButton" className="flex justify-between p-5">
          <button className="border-2 p-3  border-black whitespace-pre grow hover:bg-blue-300" onClick={() => handleAddToCart()} >ADD TO BAG   +</button>
        </div>
      </div>
    </div>
  )
}
