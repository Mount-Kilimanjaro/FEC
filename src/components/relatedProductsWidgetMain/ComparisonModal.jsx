import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";



function ComparisonM (props) {
  const myItem = useSelector(state => state.category.currentItem);



if (props.showModal) {
  return (
    <div className="modalBackground">
<div className='ComparisonModal'>
      <svg onClick={props.closeModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cancel_but" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
<table>
  <tr>
    <th>Basic</th>
    <th>Pro</th>
    <th>comparison</th>
  </tr>
  <tr>
    <td>Sample text</td>
    <td>Sample text</td>
    <td>Sample text</td>

  </tr>
  <tr>
    <td>Sample text</td>

  </tr>

</table>
    </div>
    </div>

  )
} else {
  return (<div></div>)
}
}

export default ComparisonM;