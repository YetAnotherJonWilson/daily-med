import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import C from './constants'
import { upload_mini } from './store/reducers'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

const state = null

const action = {
    type: C.UPLOAD_MINI_MEDITATION,
    payload: "locationFour"
}

const nextState = upload_mini(state, action)



console.log(`

    initial mini_med: ${state}
    action: ${JSON.stringify(action)}
    new mini_med: ${nextState}
  
`)
