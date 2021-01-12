import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//logger(obj, next, action)
//logger(obj)(next)(action) - Curried function
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //middleware code
  console.log('ACTION_TYPE = ', action.type);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// });

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


