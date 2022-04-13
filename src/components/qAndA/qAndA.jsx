import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import QSearch from './qAndAComponents/QSearch.jsx';
import QList from './qAndAComponents/QList.jsx';
import '../../style/qAndA/qAndA.css';

const QAndA = (props) => {
  const currentItemId = useSelector(state => state.category.currentItemId);
  const [qData, qDataUpdater] = useState();
  const [filteredData, setFilteredData] = useState(qData);
  const [highlightedString, setHighlightedString] = useState('');

  const headers = {
    'Authorization': process.env.REACT_APP_API_TOKEN
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let url=`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${currentItemId}&count=200`;
        const response = await axios.get(url, {headers});
        qDataUpdater(response.data.results);
        setFilteredData(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentItemId) {
      fetchQuestions();
    }
  }, [currentItemId]);

  const onSearchKeystroke = (e) => {
    e.PreventDefault();
    let userSearch = e.target.value;
    let results = [];

    if (userSearch.length >= 3) {
      setHighlightedString(userSearch);
      qData.map((qObj) => {
        let lowerQ = qObj.question_body.toLowerCase();
        if(lowerQ.includes(userSearch)) {
          results.push(qObj);
        }
        Object.values(qObj.answers).map((answer) => {
          let lowerA = answer.body.toLowerCase();
          if (lowerA.includes(userSearch)) {
            results.push(qObj);
          }
        })
      })
      setFilteredData(results);
    } else {
      setFilteredData(qData);
      setHighlightedString('');
    }
  };

  return (
    <div className='q-and-a-container'>
      <p className='q-and-a-title'>{`QUESTIONS & ANSWERS`}</p>
      <div className='q-and-a-components-container'>
        <QSearch onSearchKeystroke={onSearchKeystroke} />
        {qData && filteredData ? <QList qData={filteredData} highlightedString={highlightedString} /> : null}
      </div>
        {/* <ul id='q-ul'>
          {qListData.map((item, index) => <li key={index}>Q: {item.question_body}</li>)}
        </ul>

        <button className='add-question-button' onClick = {() => alert('ADD A QUESTION + Clicked')}>
          <span>ADD A QUESTION +</span>
        </button> */}
    </div>
  )
};

export default QAndA;