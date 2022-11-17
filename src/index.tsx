import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCSS from './global.css';
import 'typeface-roboto';
import 'typeface-rubik';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
);
