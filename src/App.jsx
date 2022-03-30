import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// importing the function that modify redux state
import { setData } from './store/reducer/stateReducer';

function App() {
  // const data = useSelector((state) => state);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <p>my app</p>
    </div>
  );
}

export default App;
