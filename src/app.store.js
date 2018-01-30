import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";

import { dailysentence } from './redux/dailysentence';

const reducers = combineReducers({ dailysentence })

const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;
export const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
));
