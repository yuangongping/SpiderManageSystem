import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';

import router from './router';
import configureStore from './configureStore';
import { ConnectedRouter } from 'react-router-redux';


// Create redux store with history
const initialState = {};
const history = createHashHistory();
const store = configureStore(initialState, history);

const ICE_CONTAINER = document.getElementById('ice-container');


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{router()}</ConnectedRouter>
  </Provider>,
  ICE_CONTAINER
);

