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
        <span className='q-list-q-li'>
          <h3 className='q-list-q-body'>Q: {qObj.question_body}</h3>
            <span className='q-list-span-element'>Helpful?&ensp;
              <span className='q-list-click-event' onClick={() => alert('POST /question_helpfulness++')}>
                <span className='q-list-yes'>Yes</span></span>
              ({qObj.question_helpfulness})
              &emsp;|&emsp;
              <span className='q-list-click-event' onClick={() => setShow(true)}>Add Answer</span>
              <AddAModal show={show} onClose={() => setShow(false)} />
            </span>
        </span>
        <span>
          {Object.values(qObj.answers)
          .sort((a, b) => { return b.helpfulness - a.helpfulness })
          .slice(0, aCount)
          .map((aObj, index) => (
            <div className='a-list-per-q' key={index}>
              <span>
                <span className='q-list-a-element'>A: </span>{aObj.body}
              </span>
              <br></br>
              <span className='a-list-data'>
                <span className='a-list-data-element'>by {aObj.answerer_name},&ensp;
                  {new Date(aObj.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                &emsp;&emsp;|&emsp;&emsp;
                <span className='a-list-data-element'>Helpful?&ensp;
                  <span className='q-list-click-event a-list-yes' onClick={() => alert('POST /answer_helpfulness++')}>Yes</span>
                  ({aObj.helpfulness})
                </span>
                &emsp;|&emsp;&emsp;
                <span className='a-list-data-element'><span className='q-list-click-event' onClick={() => alert('Set Answer Report Boolean to True')}>Report</span></span>
              </span>
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

