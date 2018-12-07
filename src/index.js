import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const jokeStoreReducer = (state = {joke:'cue laughs'}, action) => {
    const newState = {
        ...state,
        joke: action.payload
    }
    return newState;
}

const store = createStore(jokeStoreReducer);

const AppWrapped = connect(state => { return { joke: state.joke }})(App);

ReactDOM.render(<Provider store={store}><AppWrapped /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
