import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";



function ComparisonM(props) {
  const myItem = useSelector(state => state.category.currentItem);
  var compareArray = [];
  for (var i = 0; i < Object.keys(props.feat).length; i++) {
    var objj = {};
    objj[Object.keys(props.feat)[i]] = props.feat[Object.keys(props.feat)[i]]
    compareArray.push(objj)
  }
  if (props.showModal) {
    return (
      <div className="modalBackground">
        <div className='ComparisonModal'>
          {/* <h3>comparing</h3> */}
          <svg onClick={props.closeModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cancel_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <table>
            <tr>
              <th>{myItem.name}</th>
              <th></th>
              <th>{props.prop1.name}</th>
            </tr>
            {//&#x2713;
              compareArray.map((value, index) => {
                return (


                  <tr key={index}>
                    <td>{(value[Object.keys(value)[0]].left) ? (value[Object.keys(value)[0]].left) : ''}</td>
                    <td className='feat'>{Object.keys(value)[0]}</td>
                    <td>{(value[Object.keys(value)[0]].right) ? (value[Object.keys(value)[0]].right) : ''}</td>
                  </tr>


                )
              })
            }
          </table>
        </div>
      </div>

    )
  } else {
    return (<div></div>)
  }
}

export default ComparisonM;