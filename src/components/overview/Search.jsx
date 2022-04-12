import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import searchIcon from "./assets/search.png";
import SearchModal from "./SearchModal.jsx";

export default function Search(props) {
    const {handleToggleCart,cartVisibility} = props.cartModal;
    const data = useSelector(state => state.category.category)
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    // const [modalVisible , toggleModalVisible] = useState(false);
    const [filter, setFilter] = useState('');
    const {modalVisible, toggleModalVisible} = props.modal
    // const handleSearch = () => {
    //     if(search.length < 3) {
    //         return alert("search much include atleast 3 character");
    //     }
    //     const filteredData = data.filter(obj => {
    //         const searchStr = search.toLowerCase().trim();
    //         if (
    //             obj.name.toLowerCase().includes(searchStr) || 
    //             obj.slogan.toLowerCase().includes(searchStr) || 
    //             obj.description.toLowerCase().includes(searchStr) || 
    //             obj.category.toLowerCase().includes(searchStr) || 
    //             obj.default_price.toLowerCase().includes(searchStr)
    //             ) {
    //                 return obj;
    //         }
    //         return null;
    //     })
    //     setFilteredData(filteredData);
    //         toggleModalVisible(true);
    // };

    const handleSearch = (value) => {
            setSearch(value);
    };
    useEffect(() => {
        const filterData = (data , search, filter) => {
            search.toLowerCase().trim();
            const filteredData = data.filter(obj => {
                if (filter) {
                    return obj[filter].toLowerCase().includes(search);
                } else {
                    if (
                        obj.name.toLowerCase().includes(search) || 
                        obj.slogan.toLowerCase().includes(search) || 
                        obj.description.toLowerCase().includes(search) || 
                        obj.category.toLowerCase().includes(search) || 
                        obj.default_price.toLowerCase().includes(search)
                        ) {
                            return obj;
                    }
                    return null;
                }
            })
            return filteredData; 
        }
        
      if (search.length > 2) {
        setFilteredData(filterData(data, search, filter));
        props.toggleBlurBG(true);
        toggleModalVisible(true);
      }else {
        toggleModalVisible(false);
        props.toggleBlurBG(false);
      }
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search,filter])
             
  return (
    <div className="w-full  flex justify-center p-2 md:pb-2  bg-white absolute top-[60px] md:static md:bg-white/0">
        <div className="flex w-full h-35 md:w-3/6 ">
            <input className="grow outline-none p-2 border-2 border-black" type="search" placeholder="Search ...." value={search} 
            onChange={(e) => handleSearch(e.target.value)} 
            onClick={() =>{
                handleToggleCart(false);
                if(search.length > 2) {
                    props.toggleBlurBG(true);
                    toggleModalVisible(true);
                }
                
                
            }}          
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                 return handleSearch();
                 }
             }}/>
            <div className="flex  ml-2">
             <select className="border-black border-2" onChange={(e) =>setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="category">Category</option>
                <option value="name">Name</option>
                <option value="description">Description</option> 
             </select>
            {/* <img className="p-1 border-black border-l-2 bg-white hover:bg-blue-300 hover:cursor-pointer" 
            src={searchIcon} alt="search icon" 
            onClick={() => handleSearch()}/> */}
            </div>   
        </div>
        <SearchModal 
        modal={{modalVisible, toggleModalVisible}} 
        filteredData={filteredData}
        cartVisibility={cartVisibility} 
        toggleBlurBG={props.toggleBlurBG}
        />
        
    </div>
  )
}
