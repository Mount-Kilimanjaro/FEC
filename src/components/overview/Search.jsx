import React, { useState } from "react";
import { useSelector } from "react-redux";
import searchIcon from "./assets/search.png";
import SearchModal from "./SearchModal.jsx";
export default function Search(props) {
    const data = useSelector(state => state.category.category)
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [modalVisible , toggleModalVisible] = useState(false);

    const handleSearch = () => {
        if(search.length < 3) {
            return alert("search much include atleast 3 character");
        }
        const filteredData = data.filter(obj => {
            const searchStr = search.toLowerCase().trim();
            if (
                obj.name.toLowerCase().includes(searchStr) || 
                obj.slogan.toLowerCase().includes(searchStr) || 
                obj.description.toLowerCase().includes(searchStr) || 
                obj.category.toLowerCase().includes(searchStr) || 
                obj.default_price.toLowerCase().includes(searchStr)
                ) {
                    return obj;
            }
            return null;
        })
        setFilteredData(filteredData);
            toggleModalVisible(true);
    };

  return (
    <div className="w-full  flex justify-center p-2 md:pb-2 container bg-white absolute top-[60px] md:static md:bg-white/0">
        <div className="flex w-full h-35 md:w-3/6 border-2 border-black">
            <input className="grow outline-none p-2" type="search" placeholder="Search ...." value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            onClick={() => toggleModalVisible(false)}             
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                 return handleSearch();
                 }
             }}/>
            <div className="flex">
            <img className="p-1 border-black border-l-2 bg-white hover:bg-blue-300 hover:cursor-pointer" 
            src={searchIcon} alt="search icon" 
            onClick={() => handleSearch()}/>
            </div>   
        </div>
        <SearchModal 
        modal={{modalVisible, toggleModalVisible}} 
        filteredData={filteredData} />
    </div>
  )
}
