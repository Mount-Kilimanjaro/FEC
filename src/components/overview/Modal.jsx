import React from 'react'

export default function Modal(props) {
  return (
    <div className={`w-full  ${props.visability ? "flex" : "hidden"}`}>
        <div>

        </div>
        <div id="overview_modal" >

        </div>
    </div>
  )
}
