import React, { useState } from 'react';
import AddAModal from './AddAModal.jsx';

const Q = ({qObj, highlightedString}) => {
  const [aCount, setACount] = useState(2);
  const [show, setShow] = useState(false);

  if (!qObj) {
    return (<div></div>)
  } else {
    return (
      <div className='q-list-q'>
        <span>
          <h2 className='q-list-q-body'>Q: {qObj.question_body}
            <span className='q-list-span'>Helpful?
              <span className='q-list-click-event' onClick={() => alert('POST /question_helpfulness++')}>Yes</span>
              ({qObj.question_helpfulness})
              <span className='q-list-click-event' onClick={() => setShow(true)}>Add Answer</span>
              <AddAModal show={show} onClose={() => setShow(false)} />
            </span>
          </h2>
          {Object.values(qObj.answers)
          .sort((a, b) => { return b.helpfulness - a.helpfulness })
          .slice(0, aCount)
          .map((aObj, index) => (
            <div className='a-list-per-q' key={index}>
              <span>
                <h5>A: </h5>{aObj.body}
              </span>
              <p className='a-list-data'>
                by {aObj.answerer_name},
                {new Date(aObj.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                Helpful?
                <span className='q-list-click-event'>Yes</span>
                ({aObj.helpfulness})
                <span className='q-list-click-event'>Report</span>
              </p>
            </div>
          ))}
        </span>
        {(Object.values(qObj.answers).length <= 2) ? null : ((Object.values(qObj.answers).length === aCount) ?
        <button className='a-list-click-div-event' onClick={() => {setACount(2)}}>COLLAPSE ANSWERS</button>
        :
        <button className='a-list-click-div-event' onClick={() => {setACount(Object.values(qObj.answers).length)}}>LOAD MORE ANSWERS</button>
        )}
      </div>
    )}
};

export default Q;

