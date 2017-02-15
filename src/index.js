import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import C from './constants'
import { goals, dailyTasks }from './initialState.json'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(`

             Goals
  =============================
  The initial goal is "${goals}"
  There are ${dailyTasks.length} tasks in state
  
  Constants (actions)
  -------------------
  ${Object.keys(C).join('\n  ')}
  
`)
