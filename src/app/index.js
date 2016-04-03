import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configuredStore from './store/configureStore';

import App from './containers/App';
import Home from './containers/Home';

require('file?name=[name].[ext]!../index.html');
require('file?name=[name].[ext]!../config.xml');

document.addEventListener('deviceready', () => {
  // TODO: add splashscreen and statusbar plugin
}, false);

ReactDOM.render(
  <div>
    <Provider store={ configuredStore }>
      <Router history={ hashHistory }>
        <Route component={ App }>
          <IndexRoute component={Home}/>
          <Route path="/home" component={ Home } />
          <Redirect from="/" to="/home" />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);
