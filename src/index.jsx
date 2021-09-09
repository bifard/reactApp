import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider} from 'react-redux';
import { rootReducer} from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import  { App } from './App.tsx';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


window.addEventListener('load', () => {
  ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
          <App/>
      </Provider>
  </BrowserRouter> 
  , document.getElementById('react_root'));
});
