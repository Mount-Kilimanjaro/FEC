import React, { useState, useEffect } from 'react';

export default function SearchModal(props) {
    const [] = useState({index:[0,15], })
    const {modalVisible, toggleModalVisible} = props.modal;

    useEffect(() => {

      }, [props.filteredData]);

  return (
      <div className={`w-full h-full fixed top-[110px] left-0 justify-center ${modalVisible ? 'flex' : 'hidden'}`} onClick={() => toggleModalVisible(false)}>
          <div className='w-3/6 h-4/5 flex flex-col bg-white items-center'>
              {props.filteredData.map((item,i) => {
                  console.log(item)
                  return (
                  <div>
                      
                  </div>
                  )
              })}
          </div>
      </div>    
  )
}