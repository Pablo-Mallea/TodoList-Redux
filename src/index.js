import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { notereducer } from './reducers/notereducer';
import { createStore,combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './reducers/filterReducer';

const container = document.getElementById('root');
const root = createRoot(container);
const reducer = combineReducers(
  {
    notes: notereducer,
    filters: filterReducer
  }
)
const store  = createStore(reducer)

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
