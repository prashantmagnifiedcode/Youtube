import React from 'react';
import ReactDOM from 'react-dom';
import Store from './component1/redux/store.js'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
ReactDOM.render(
  <>
  <BrowserRouter>
  <Provider store ={Store}>
    <App/>
    </Provider>
  </BrowserRouter>
  </>
  ,

  document.getElementById('root')
);
