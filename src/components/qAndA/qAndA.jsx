import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../style/qAndA/QAndA.css';

const QAndA = (props) => {
  const currentItemId = useSelector(state => state.category.currentItemId);
  // console.log('QAndA.jsx|Line 9|currentItemId = ', currentItemId);
  /*
  What state value to reference to properly declare questionId?
  const questionId = useSelector(state => state.
  */
  const [qListData, qListUpdater] = useState([]);
  //const [aListData, aListUpdater] = useState([]);

  const headers = {
    "Authorization": process.env.REACT_APP_API_TOKEN
  };

  /*
  useEffect
  1st Parameter
    anon func --> async await promise {try api call, catch err}
  2nd Parameter
    array of monitored elements whose changes trigger useEffect
  Use Case
    -calls the List Questions API whenever the state of customerItemId changes
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${currentItemId}`, {headers});
        // console.log('QAndA.jsx|Line 19|response = ', response);
        // console.log('QAndA.jsx|Line 20|response.data = ', response.data);
        // console.log('QAndA.jsx|Line 21|response.data.results = ', response.data.results);
        qListUpdater(response.data.results);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentItemId]);

  /*
  useEffect
  1st Parameter
    anon func --> async await promise {try api call, catch err}
  2nd Parameter
    array of monitored elements whose changes trigger useEffect
  Use Case
    -calls the Answers List API whenever the state of questionId changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?question_id=${item.question_id}/answers`, {headers});
        aListUpdater(response.data.results);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [questionId]);
  */

  return (
    <div className='q-and-a-container'>
      <div className='q-and-a-component-container'>
        {/*QAndA Title*/}
        <p className = 'q-and-a-title'>{`QUESTIONS & ANSWERS`}</p>
        {/*QAndA SearchBar*/}
        <form action='q-submit' method='POST' id='q-input-form'>
          <label id='q-input-label'>HAVE A QUESTION? SEARCH FOR ANSWERS...</label>
          <input type='text' id='qText' />
        </form>
        {/*QAndA QuestionList*/}
        <ul id='q-ul'>
          {qListData.map((item, index) => <li key={index}>Q: {item.question_body}</li>)}
            {/*
            Call Answers List API using item.question_id and render each answer as an li here.
            OR
            Call Answers List API above and render each here.
            */}
          <li>
            A:
          </li>
          <li>
            Answer Author data
          </li>
        </ul>
      </div>
    </div>
  )
};

export default QAndA;