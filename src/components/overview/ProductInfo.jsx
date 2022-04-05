import React from "react";

export default function ProductInfo(props) {
    const {slogan, description, features} = props.product;
    const check = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
  return (
    <div  className="w-full flex-row p-10 h-full hidden md:flex">
        <div id="overview_decription" className="w-4/6 flex flex-col items-center pl-4 pr-10">
            <h1 className="text-3xl">{slogan}</h1>
            <p>{description}</p>
        </div>

        <div id="overview_feature" className="w-2/6 flex flex-col items-center justify-center" >
            <div className="flex flex-col items-start">
                {features.map((features, i) => { 
                const {feature, value} = features;
                return (
                <div className="flex" key={i}>
                    {check}
                    <p>{feature} : {value}</p>
                </div>
                )})}
            </div>
        </div>
    </div>
  )
}
