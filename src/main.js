import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { initBoard, swapTiles } from './middleware';
import * as reducers from './reducers';
import Game from './containers/game';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  initBoard(),
  swapTiles(),
  createLogger(),
)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
