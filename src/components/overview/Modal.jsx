import React,{useEffect} from "react"
import {hideOverFlow} from "./helperFn/shoppingCart.js"


export default function Modal(props) {
    

    useEffect(() => {
        hideOverFlow(props.visibility);
        const onResize = () => {
            if (window.innerWidth < 766 && props.visibility) {
                hideOverFlow(false);
                props.toggleModal(false);
            }
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.visibility]);
    
  return (
    <div className={`${props.visibility ? "hidden md:block" : "hidden"}`} >
        <div>
            <div id="overview_modal" className="fixed z-[100] bg-white w-full max-w-1280 flex justify-center top-[600px] pr-[16px]">
                <div>
                {props.children}
                </div>    
            </div>
        </div>
        <div className="w-screen h-full bg-black/50 absolute top-0 left-0 z-[80]" onClick={() => props.toggleModal(false)}>
        </div>
    </div>
  )
}

