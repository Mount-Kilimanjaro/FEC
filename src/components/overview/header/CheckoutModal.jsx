import React from 'react'

export default function CheckoutModal(props) {
  return (
    <div className={`fixed h-full w-full top-0 left-0 bg-black/25 ${props.visibility ? "md:block" : "hidden"}`} >
        <div className="w-full h-full flex justify-center items-center">
            <div id="" className="bg-white w-full max-w-1280 flex justify-center items-center">
                <div>
                    <div id="header-overview">

                    </div>
                    gfhfghfg
                </div>
            </div>
        </div>
        {/* <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-[80]" onClick={() => props.toggleModal(false)}>
        </div> */}
    </div>
  )
}
