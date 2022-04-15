import React, { useState } from 'react';
import Q from './Q.jsx';
import QModal from './QModal.jsx';

const QList = ({ qData, highlightedString }) => {
  const [qCount, setQCount] = useState(2);
  const [show, setShow] = useState(false);

  return (
    <div className='q-list-div'>
      <div className = 'q-a-list'>
        {qData
          .sort((a, b) => {
            return b.question_helpfulness - a.question_helpfulness;
          })
          .slice(0, qCount)
          .map((qObj, index) => {
            return <Q qObj={qObj} highlightedString={highlightedString} key={index} />;
          })
        }
      </div>

      <div className='q-list-buttons'>
        {(qData.length > qCount) ?
          <button className='q-list-button' onClick={() => {setQCount(qData.length)}}>
            <span className='q-list-button-text'>MORE ANSWERED QUESTIONS</span>
          </button>
          :
          <button className='q-list-button' onClick={() => {setQCount(2)}}>
            <span className='q-list-button-text'>MINIMIZE LIST</span>
          </button>
        }
          <button className='q-list-button' onClick={() => setShow(true)}>
            <span className='q-list-button-text'>ADD A QUESTION +</span>
          </button>
        <QModal show={show} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

export default QList;