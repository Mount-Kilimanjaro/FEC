import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../../style/QAndA/QAndA.css';

const QAndA = (props) => {
  const currentItemId = useSelector(state => state.category.currentItemId);
  console.log(currentItemId);

  const headers = {
    "Authorization": process.env.REACT_APP_API_TOKEN
  }

  let qListFirstQ = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${currentItemId}`,{headers});
        console.log(response);
        console.log(response.data);
        if (response.data.results.length === 0) {
          console.log('No questions for this product_id.');
        } else {
          const qList = response.data.results;
          console.log('QAndA.jsx | Line 26 | qList = ', qList);
          qListFirstQ = `Q: ${qList[0].question_body}`;
          console.log('QAndA.jsx | Line 28 | qListFirstQ = ', qListFirstQ);
          // const QListData = qList.map(q =>
          //   <li>
          //     {/* Q: {q.props.children.question_body}               Helpful? Yes({q.props.children.question_helpfulness}) | Add Answer */}
          //     Q: {qList.q}
          //   </li>
          // );
          // const qListData = qList.map(q => {
          //   return({
          //     author: q.asker_name,
          //     body: q.question_body,
          //     date: q.question_date,
          //     helpfulness: q.question_helpfulness
          //   });
          // });
          // console.log('QandA.jsx | Line 41 | QListData = ', QListData);
        }
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentItemId]);

  return (
    <div className='q-and-a-container'>
      <div className='q-and-a-component-container'>
        <h3>{`QUESTIONS & ANSWERS`}</h3>
        <form action='q-submit' method='POST' id='qInputForm'>
          <label id='qInputLabel'>HAVE A QUESTION? SEARCH FOR ANSWERS...</label>
          <input type='text' id='qText' />
        </form>
        <ul id='q-ul'>
          <li>
            {() => {
              if(qListFirstQ) {
                return qListFirstQ;
              }
            }}
          </li>
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
}

export default QAndA;