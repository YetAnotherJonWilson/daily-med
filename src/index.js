import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import C from './constants'
import { upload_mini } from './store/reducers'

const state = 10

const action = {
    type: C.upload_mini_meditation,
    payload: 15
}

const nextState = upload_mini(state, action)



console.log(`

    initial mini_med: ${state}
    action: ${JSON.stringify(action)}
    new mini_med: ${nextState}
  
`)
