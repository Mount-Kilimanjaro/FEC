import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { addToCart } from "../../store/reducer/shoppingCartReducer.js";
import {validOrderQuantity, resetSizeInputs, resetQuantityInputs, quantityAvailable} from './helperFn/shoppingCart.js';
import { RatingStar } from 'rating-star';

export default function ProductSelector(props) {
  const {product, updateStatistic} = props;
  const {styleIndex, handleSetStyleIndex} = props.styleIndex;
  const [quantity, setQuantity] = useState(null);
  const [order, setOrder] = useState({});
  const [sku, setSku] = useState(undefined);
  // console.log(product);
  // console.log(styleIndex)
  // console.log(product.style[styleIndex])

  const skus = product.style[styleIndex > product.style.length ? 0 : styleIndex].skus;
  const dispatch = useDispatch();

  const resetInputs = () => {
    setSku(undefined);
    setOrder({});
    setQuantity(null);
    resetQuantityInputs();
  };

  const handleSizeChange = (sku) => {
    setSku(sku);
    setQuantity(quantityAvailable({sku, quantity: skus[sku].quantity } ,props.cart));
    const item = {...order};
    item.sku = sku;
    item.size = skus[sku].size;
    item.quantity = undefined;
    setOrder(item);
    resetQuantityInputs();
  };


  const handleSetStyle = (index) => {
    handleSetStyleIndex(index);
    resetInputs();
    resetSizeInputs();
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
    let newOrder = {...order};
    newOrder.img = product.style[styleIndex].photos[0].thumbnail_url;
    newOrder.style_id = product.style[styleIndex].style_id;
    newOrder.maxQuantity = Number(quantity);
    newOrder.price = Number(product.default_price);
    const result = validOrderQuantity(newOrder, props.cart);
    if (result.error) {
      return alert(result.error);
    }
    dispatch(addToCart(result));
    newOrder = {...order};
    newOrder.quantity = undefined;
    props.handleToggleCart(true);
    resetQuantityInputs();
    setOrder(newOrder);
  };

  const scrollToReviews = () => {
    document.querySelector('#reviews-container').scrollIntoView();
  };
  
  useEffect(() => {
    resetSizeInputs();
    resetInputs()
  }, [product])

  useEffect(() => {
    if (skus[sku]){
      const getQuantity = quantityAvailable({sku, quantity: skus[sku].quantity } ,props.cart)
        setQuantity(getQuantity);
      if (getQuantity === 0) {
        resetQuantityInputs();
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart])
  

  
  return (
    <div id="productSelector" className="md:w-3/6 w-full pl-6  pr-5">
      <div className="p-2 flex">
      <RatingStar
          id={'rating-star'}
          size={20}
          maxScore={5}
          rating={Number(product.averageRating) || 0}
          colors={{ rear: 'transparent', stroke: 'black', mask: 'black' }}
        />
        <p className="ml-2 underline hover:text-blue-300 hover:cursor-pointer"  onClick={(e) => updateStatistic(scrollToReviews(),"overview_productSelector_all_reviews")}>Read all reviews</p>
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
        <h1><span className="font-bold">{`STYLE >`}  </span>{product.style[styleIndex >product.style.length ? 0 : styleIndex].name}</h1>
        <div id="style" className="flex flex-row flex-wrap gap-5 p-4 justify-center">
          {product.style.map((style, i) => {
            return (
              <img key={i} id="styleThumbNail" className={`rounded-full hover:cursor-pointer border-2 hover:border-black hover:drop-shadow-lg ${styleIndex === i ? "border-[#79592B] border-4" : ""}`} name='overview_productSelector_change_style' src={product.style[i].photos[0].thumbnail_url} alt="" onClick={(e) => updateStatistic(handleSetStyle(i),e)}/>
            )})}
        </div>
      </div>
      <div id="overview_selector">
        <div className="flex justify-between p-5">
          <div id="size">
            <select id="overview_select_size" className="border-2 p-3 border-black hover:cursor-pointer" value={sku} name="overview_productSelector_size_change"  defaultValue={"DEFAULT"} onChange={(e) => {
              updateStatistic(handleSizeChange(e.target.value),e)
            }}>
              <option value="DEFAULT" disabled>SELECT SIZE</option>
              {Object.keys(skus).map((sku,i) => 
              <option key={i} value={sku} >{skus[sku].size}</option>
              )}
            </select>
          </div>
          <div id="quantity" className="">
            <select id="overview_select_quantity" className="border-2 p-3 border-black hover:cursor-pointer"  value={order.quantity} name="overview_productSelector_quantity_change" defaultValue={"DEFAULT"} 
              onChange={(e) => updateStatistic(handleAddQuantity(e.target.value),e)
              }>
              {quantity === 0 ? <option  value="DEFAULT" disabled>OUT OF STOCK</option> : <option  value="DEFAULT" disabled>QUANTITY</option>}
              {Array.from(Array(quantity), (num, i) => {
                if(quantity) {
                  return <option key={i}>{i + 1}</option>
                } else {
                  return "";
                }
              })}
            </select>
          </div>
        </div>
        <div id="styleButton" className="flex justify-between p-5">
          <button id="overview_addedItemToCart" className="border-2 p-3 border-black whitespace-pre grow hover:bg-slate-300" name='overview_productSelector_add_to_cart'
          onClick={(e) => updateStatistic(handleAddToCart(),e)} 
          >ADD TO BAG   +</button>
        </div>
      </div>
    </div>
  )
}
