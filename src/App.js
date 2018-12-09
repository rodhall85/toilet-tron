import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Toilet from './Toilet';
import Help from './Help';
import Fourzerofour from './Fourzerofour';
import { Route, Switch } from 'react-router-dom'
//import { Switch } from 'react-router'

const jokeStoreReducer = (state = { joke: 'cue laughs' }, action) => {
  const newState = {
    ...state,
    joke: action.payload
  }
  return newState;
}

const store = createStore(jokeStoreReducer);

const ToiletWrapped = connect(state => { return { joke: state.joke } })(Toilet);

class App extends Component {


  componentDidMount() {
    // make api reqest to http://api.icndb.com/jokes/random\?firstName\=Toilet
    // update state.joke
    // display state.joke

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Provider store={store}>
            <Switch location={this.props.location}>


              <Route exact path="/help/" component={Help} />
              <Route exact path="/" component={ToiletWrapped} />
              <Route exact path="*" component={Fourzerofour} />

            </Switch>
          </Provider>
        </header>
      </div>

    );
  }
}

export default App;
