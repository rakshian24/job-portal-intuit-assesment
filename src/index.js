import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadInititalAppLoadState, savedState, saveState } from './retainState';
require('dotenv').config()
loadInititalAppLoadState()

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    savedState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
} else {
  store = createStore(rootReducer, savedState, applyMiddleware(thunk));
}

store.subscribe(() => {
  saveState(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
