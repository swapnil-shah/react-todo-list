import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

import MyList from './MyList'

const toDos = ["Buy ice cream.", "Eat ice cream.", "Go to the gym."];
ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDos} />
  </React.StrictMode>,
  document.getElementById('root')
);
