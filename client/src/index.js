import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initstate';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, initState, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
