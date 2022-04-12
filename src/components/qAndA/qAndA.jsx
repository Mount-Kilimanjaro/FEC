import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../style/qAndA/qAndA.css';

const QAndA = (props) => {
  const currentItemId = useSelector(state => state.category.currentItemId);
  const [qListData, qListUpdater] = useState([]);

  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${currentItemId}&count=200`;
        const response = await axios.get(url, {headers});
        console.log('QAndA.jsx|Line 34|response = ', response);
        console.log('QAndA.jsx|Line 35|response.data = ', response.data);
        console.log('QAndA.jsx|Line 36|response.data.results = ', response.data.results);
        console.log('QAndA.jsx|Line 37|response.data.results[0].answers = ', response.data.results[0].answers);
        qListUpdater(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentItemId) {
      fetchQuestions();
    }
  }, [currentItemId]);

  return (
    <div className='q-and-a-container'>
      <div className='q-and-a-component-container'>
        <p className = 'q-and-a-title'>{`QUESTIONS & ANSWERS`}</p>
        <ul id='q-ul'>
          {qListData.map((item, index) => <li key={index}>Q: {item.question_body}</li>)}
        </ul>

        <button className='add-question-button' onClick = {() => alert('ADD A QUESTION + Clicked')}>
          <span>ADD A QUESTION +</span>
        </button>
      </div>
    </div>
  )
};

export default QAndA;