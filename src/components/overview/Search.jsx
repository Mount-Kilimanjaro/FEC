import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import searchIcon from './assets/search.png';
import SearchModal from './SearchModal.jsx';
export default function Search(props) {
    const data = useSelector(state => state.category.category)
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [modalVisible , toggleModalVisible] = useState(false);
    const handleSearch = () => {
        const filteredData = data.filter(obj => {
            if (
                obj.name.toLowerCase().includes(search.toLowerCase()) || 
                obj.slogan.toLowerCase().includes(search.toLowerCase()) || 
                obj.description.toLowerCase().includes(search.toLowerCase()) || 
                obj.category.toLowerCase().includes(search.toLowerCase()) || 
                obj.default_price.toLowerCase().includes(search.toLowerCase())
                ) {
                    return obj;
            }
            return null;
        })
        setFilteredData(filteredData)
        toggleModalVisible(true)
    };

  return (
    <div className=' flex justify-center p-2 md:pb-2 container z-30 absolute top-[65px]'>
        <div className='flex w-full h-35 md:w-3/6 border-2 border-black'>
            <input className='grow outline-none p-2' type='search' placeholder='Search ....' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className='flex'>
            <img className='p-1 border-black border-l-2 hover:bg-blue-300 hover:cursor-pointer' src={searchIcon} alt='search icon'onClick={() => handleSearch()}/>
            </div>   
        </div>
        <SearchModal modal={{modalVisible, toggleModalVisible}} filteredData={filteredData} />
    </div>
  )
}
