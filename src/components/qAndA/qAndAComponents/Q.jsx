import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAModal from './AddAModal.jsx';

const Q = ({qObj, highlightedString}) => {
  const [aCount, setACount] = useState(2);
  const [show, setShow] = useState(false);

  if (!qObj) {
    return (<div></div>)
  } else {
    return (
      <div className='q-list-result'>
        <span className='q-list-q-body'>Q: {qObj.question_body}  |</span>
            <span className='q-li-helpful'>|  Helpful?  |</span>
              <span className='q-li-helpful-count' onClick={() => alert('Yes clicked in QAndA Widget')}>|  Yes</span>
              ({qObj.question_helpfulness}) |
                <span className='q-li-add-a' onClick={() => setShow(true)}>|  Add Answer</span>
                  <AddAModal show={show} onClose={() => setShow(false)} />
        {/*Answers forEach Question*/}
          {Object.values(qObj.answers)
          .sort((a, b) => { return b.helpfulness - a.helpfulness })
          .slice(0, aCount)
          .map((aObj, index) => (
            <div className='a-li' key={index}>
              <span>A: {aObj.body}</span>
              <p className='a-li-data'>
                by {aObj.answerer_name},
                {new Date(aObj.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}  |
                Helpful?
                <span className='a-li-helpful'>Yes</span>
                ({aObj.helpfulness})  |
                <span className='a-li-report'>Report</span>
              </p>
            </div>
          ))}

          {(Object.values(qObj.answers).length <= 2) ? null : ((Object.values(qObj.answers).length === aCount) ?
          <button className='a-list-collapse' onClick={() => alert('Collapse Answers Clicked')}>Collapse Answers</button>
          :
          <button className='a-list-expand' onClick={() => alert('Load More Answers Clicked')}>LOAD MORE ANSWERS</button>
          )}
      </div>
    )}
};

export default Q;

