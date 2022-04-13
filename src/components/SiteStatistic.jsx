import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {hideOverFlow} from './overview/helperFn/shoppingCart.js'

export default function SiteStatistic() {
    const [visibility, setVisibility] = useState(true);
    const statistic = useSelector((state) => state.statistic.clickCount)
    const statisticKeys = Object.keys(statistic);
    useEffect(() => {
        if (visibility) {
            hideOverFlow(true);
        } else {
            hideOverFlow(false);
        }
    }, [visibility])
    
  return (
    <div className="bg-primary w-full flex justify-center p-2">
        <div className="hover:text-white hover:cursor-pointer font-bold" onClick={() => setVisibility(true)}>
            Site Statistic
        </div>
        <div className={`fixed z-[81] top-0 left-0 w-full h-full bg-black/50 ${visibility ? "block" : "hidden"}`}>
            <div className="flex h-screen items-center justify-center">
                <div className="bg-white p-4">
                    {statisticKeys.map((key, i) => 
                    <div key={i} className="flex">
                        <p>{`${key} has been clicked `}<span className="font-bold text-xl">{statistic[key]}</span>{` times`}</p>
                    </div>
                    )}
                    <div className="flex justify-center mt-2">
                        <p className='border-2 border-black p-1 bg-slate-300 hover:bg-slate-400 hover:cursor-pointer' onClick={() => setVisibility(false)}>CLOSE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
