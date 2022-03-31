import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// importing the function that modify redux state
import { setCategory, setCurrentItem, setCurrentId } from './store/reducer/categoryReducer';
import Overview from './components/overview/Overview.jsx';

function App() {
  const currentItemId = useSelector(state => state.category.currentItemId);
  const dispatch = useDispatch();
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  }


  useEffect(()=> {
    const fetchData = async () => {
      try {
        //api call
        const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=max',{headers});
        //set data to redux state
        dispatch(setCategory(response.data));
        if (!currentItemId) {
          dispatch(setCurrentId(response.data[0].id));
        }
      }
      catch(err) {
        console.log(err)
      }
    };
    fetchData()
  }, [])

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (currentItemId) {
          let item;
          const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}`,{headers});
          //set item
          item = response.data;
          const getStyle = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}/styles`,{headers});
          //add style to item
          item.style = getStyle.data.results;
          const getRelated = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}/related`,{headers});
          // add realted items to item
          item.related = getRelated.data
          dispatch(setCurrentItem(item))
        }
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchItem()
  },[currentItemId])
  


  return (
    <div className="App h-full w-screen flex flex-col items-center">
      <div style={{minHeight:'50px', width:'100%', maxWidth: '1280px' , backgroundColor:'blue'}}>
        header
        {/* <Header/> */}
      </div>
        <Overview/>
      <div style={{height:'40%', width:'100%', maxWidth: '1280px' , backgroundColor:'green'}}>
      RelatedProducts && your outfit
        {/* <RelatedProducts/> */}
      </div>

      <div style={{height:'35%', width:'100%', maxWidth: '1280px' , backgroundColor:'pink'}}>
      q&a
        {/* <QuestionAndAnswer/> */}
      </div>

      <div style={{height:'35%', width:'100%', maxWidth: '1280px' , backgroundColor:'purple'}}>
      Rating And Reviews
        {/* <RatingAndReviews/> */}
      </div>
    </div>
  );
}

export default App;
