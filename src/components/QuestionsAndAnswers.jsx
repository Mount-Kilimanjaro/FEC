import React from 'react';
import { useSelector } from 'react-redux';

const QuestionsAndAnswers = (props) => {
  const currentItem = useSelector(state => state.category.currentItem);
  console.log(currentItem);
  return (
    <div id="questions-and-answers" style={{display: 'flex', borderStyle: 'solid', padding: '5px'}}>

      {/* <QuestionsAndAnswers /> */}

    </div>
  )
}

export default QuestionsAndAnswers;