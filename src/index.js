import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { notereducer } from './reducers/notereducer';
import { createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const container = document.getElementById('root');
const root = createRoot(container);

const store  = createStore(notereducer, composeWithDevTools())

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
