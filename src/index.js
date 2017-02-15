import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import C from './constants'
import { sessions, miniMeditations }from './initialState.json'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(`

             Mini-sessions
  =============================
  The initial sessions are "${sessions.firstSession}"
  There are ${miniMeditations.length} mini-meditations in state
  
  Constants (actions)
  -------------------
  ${Object.keys(C).join('\n  ')}
  
`)
