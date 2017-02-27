import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


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
