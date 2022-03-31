import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// importing the function that modify redux state
import { setCategory, setCurrentItem } from './store/reducer/categoryReducer';
import RelatedProducts from './components/relatedProductsWidgetMain/RelatedProductsWidget.jsx';

function App() {
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchData = async () => {
      try {
        //api call
        const response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/?count=max',{
          headers: {
            'Authorization': process.env.REACT_APP_API_TOKEN
          }
        });
        //set data to redux state
        dispatch(setCategory(response.data));
        if (!category.currentItem) {
          dispatch(setCurrentItem(response.data[0]));
        }
      }
      catch(err) {
        console.log(err)
      }
    };
    fetchData()
  },[])
console.log(category)
  return (
    <div className="App">
      <div style={{height:'5%', width:'100%', maxWidth: '1280px' , backgroundColor:'blue'}}>
        header
        {/* <Header/> */}
      </div>

      <div style={{height:'60%', width:'100%', maxWidth: '1280px' , backgroundColor:'red'}}>
        overview
        {/* <OverView/> */}
      </div>

      
        <RelatedProducts/>


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
