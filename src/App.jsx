import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// importing the function that modify redux state
import { setCategory, setCurrentItem, setCurrentId } from './store/reducer/categoryReducer';
import Overview from './components/overview/Overview.jsx';
import Header from './components/overview/header/Header.jsx';
import RelatedProducts from './components/relatedProductsWidgetMain/RelatedProductsWidget.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx'
import QuestionAndAnswer from './components/QuestionsAndAnswers.jsx'



function App() {
  // add redux state to this component
  const currentItemId = useSelector(state => state.category.currentItemId);
  const dispatch = useDispatch();
  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
}


//hook useEffect render twice in dev because of "use strict" but wont in production build
// run once on load for api call
  useEffect(()=> {
    const fetchData = async () => {
      try {
        //api call
        const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=max',{headers});
        //set data to redux state
        dispatch(setCategory(response.data));
        // set current item being view if no item is being viewed
        if (!currentItemId) {
          dispatch(setCurrentId(response.data[0].id));
        }
      }
      catch (err) {
        console.log(err)
      }
    };
    //invoke fetchData
    fetchData()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // runs every time redux state of currentItemId changes
  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (currentItemId) {
          // api call
          const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}`,{headers});
          const getStyle = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}/styles`,{headers});
          const getRelated = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentItemId}/related`,{headers});
          let item; 
          //set item
          item = response.data;
          //add style data to item object
          item.style = getStyle.data.results;
          // add related data items to item object
          item.related = getRelated.data
          //dispatch to set redux state
          dispatch(setCurrentItem(item))
        }
      }
      catch(err) {
        console.log(err)
      }
    }
    //invoke fetchItem


    fetchItem()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentItemId])
  return (
    <div className="App h-full w-screen flex flex-col items-center">
        <Header/>
        <Overview/>
        <RelatedProducts/>
        <QuestionAndAnswer/>
        <RatingsAndReviews />
    </div>
  )
}

export default App;
