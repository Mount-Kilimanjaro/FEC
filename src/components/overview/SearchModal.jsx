import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {setCurrentId} from '../../store/reducer/categoryReducer.js'

export default function SearchModal(props) {
    const [pagination, setPagination] = useState([[0,10]]);
    const [pagiIndex, setPagiIndex] =useState(0)
    const {modalVisible, toggleModalVisible} = props.modal;
    const dispatch = useDispatch()
    const handlePagination = (index) => {
        setPagiIndex(index)
    };
    const handleSetItemId = (id) => {
        toggleModalVisible(false);
        dispatch(setCurrentId(id));
        
    };

    useEffect(() => {
        if (props.filteredData.length > 10) {
            let dataLength = props.filteredData.length;
            let count = 10;
            const arr = [];
            while (dataLength > 1) {
                arr.push([count - 10 < 0 ? 0 : count - 10,count])
                count +=10
                dataLength -= 10
            }
            setPagination(arr)
        } else {
            setPagination([[0,props.filteredData.length]])
        }
      }, [props.filteredData]);

  return (
      <div id="overview_search_modal" className={`w-full fixed top-[110px] left-0 justify-center ${modalVisible ? "flex " : "hidden"}`} onClick={() => {
        //   toggleModalVisible(false)
          }}>
              <div className=" flex flex-row bg-blue-300 items-center hover:bg-red-300 hover:cursor-pointer" onClick={() => toggleModalVisible(false)}>
                  <p className="p-1.5">
                      {`<`}
                  </p>
              </div>
          <div className="w-full md:min-w-600 md:max-w-70  flex flex-col bg-white items-center justify-center " >
              {props.filteredData.slice(pagination[pagiIndex][0],pagination[pagiIndex][1]).map((items,i) => {
                  const {name, id, description, category, default_price} = items
                  return (
                      <div key={i} className="flex flex-col items-center p-2 border-b-4 w-full hover:bg-blue-300 hover:cursor-pointer" onClick={() => handleSetItemId(id)}>
                          <div className="flex p-1">
                            <p className="pr-2"><span className="font-bold">CATEGORY</span>: {category}</p>
                            <p className="pr-2"><span className="font-bold">NAME</span>: {name}</p>
                            <p className="pr-2"><span className="font-bold">PRICE</span>: {default_price}</p>
                          </div>
                          <div>
                            <p>{`${description.slice(0,100)} ...`}</p>
                          </div>
                      </div>
                  )
              })}
            <div className="flex ">
                {pagination.map((arr,i) => {
                    return (
                        <div key={i} className={`p-3 hover:bg-blue-300 hover:cursor-pointer ${pagiIndex === i ? "bg-blue-300" : ""} ${modalVisible ? "" : "hidden"}`} onClick={() => {handlePagination(i)}}>
                                <h1>{i+1}</h1>
                        </div>
                    )
                })}
            </div>
          </div>



      </div>    
  )
}