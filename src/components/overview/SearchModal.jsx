import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {setCurrentId} from "../../store/reducer/categoryReducer.js"
import {hideOverFlow} from "./helperFn/shoppingCart.js"

export default function SearchModal(props) {
    const updateStatistic = props.updateStatistic;
    const [pagination, setPagination] = useState([[0,10]]);
    const [pagiIndex, setPagiIndex] = useState(0);
    const [sort, setSort] = useState(null);
    const {modalVisible, toggleModalVisible} = props.modal;
    const dispatch = useDispatch();
    const handlePagination = (index) => {
        setPagiIndex(index);
    };
    const handleSetItemId = (id) => {
        toggleModalVisible(false);
        dispatch(setCurrentId(id));
    };

    useEffect(() => {
        setPagiIndex(0)
        if (props.filteredData.length > 10) {
            let dataLength = props.filteredData.length;
            let count = 10;
            const arr = [];
            while (dataLength > 1) {
                arr.push([count - 10 < 0 ? 0 : count - 10,count]);
                count +=10;
                dataLength -= 10;
            }
            setPagination(arr);
        } else {
            setPagination([[0,props.filteredData.length]]);
        }
      }, [props.filteredData]);

      useEffect(() => {
        if(!props.cartVisibility && !modalVisible) {
            hideOverFlow(false);
        } else {
            hideOverFlow(true);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
       }, [modalVisible])

  return (
    <div id="overview_search_modal" className={`w-full fixed  top-[110px] md:top-[60px] left-0 justify-center ${modalVisible ? "flex " : "hidden"}`}>
        <div className="w-full md:min-w-600 md:max-w-70  flex flex-col bg-white items-center justify-center border-2 border-black " >
            <div className="p-2">
                <select className="border-black hover:cursor-pointer border-2" defaultValue={"DEFAULT"} name="header_search_filter" onChange={(e) => {updateStatistic(setSort(e.target.value),e)}}>
                    <option value="DEFAULT" disabled>Sort by</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to High</option>
                </select>
            </div>
              {props.filteredData.length > 0 ? 
                  props.filteredData.sort((a,b) => {
                      if (sort) {
                        if (sort === 'low') {
                            return a.default_price - b.default_price;
                        }
                        if (sort === 'high') {
                            return b.default_price - a.default_price;
                        }
                      }
                      return null;
                  }).slice(pagination[pagiIndex][0],pagination[pagiIndex][1]).map((items,i) => {
                    const {name, id, description, category, default_price} = items
                    return (
                        <div key={i} className="flex flex-col items-center p-2 border-b-4 w-full hover:bg-slate-200 hover:cursor-pointer text-sm md:text-base"
                        onClick={(e) => {
                            updateStatistic(null,"heder_search_result")
                            props.toggleBlurBG(false);
                            handleSetItemId(id);
                            }}>
                            <div className="flex p-1 w-full">
                                <div className="w-[33%] ml-20 ">
                                    <p className="pr-2"><span className="font-bold">CATEGORY</span>: {category}</p>
                                </div >
                                <div className="w-[33%]">
                                    <p className="pr-2"><span className="font-bold">NAME</span>: {name}</p>
                                </div>
                                <div className="w-[33%]">
                                    <p className="pr-2"><span className="font-bold">PRICE</span>: {default_price}</p>
                                </div>  
                            </div>
                            <div>
                              <p>{`${description.slice(0,100)} ...`}</p>
                            </div>
                        </div>
                    )
                })
                :
                <div>NO RESULTS FOUND</div>   
              }
            <div className="flex ">
                {pagination.length > 1 ?
                    pagination.map((arr,i) => 
                    <div key={i} className={`p-3 hover:bg-slate-400 hover:cursor-pointer ${pagiIndex === i ? "bg-slate-300" : ""} ${modalVisible ? "" : "hidden"}`} onClick={() => updateStatistic(handlePagination(i),"header_search_pagination")}>
                        <h1>{i+1}</h1>
                    </div>
                )
                    :
                    <></>
                }
            </div>
            <div className=" flex justify-center w-full bg-red-300 hover:bg-red-400 hover:cursor-pointer mt-1" onClick={() => {
                updateStatistic(null,"heder_search_modal_close")
                props.toggleBlurBG(false)
                toggleModalVisible(false)
                 }
                }>
            <p className="font-bold text-2xl">
                {`^`}
            </p>
            </div>
        </div>
    </div>    
  )
}