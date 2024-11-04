import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Main from './day1/Main';
import Ex from './day4/Ex'
import reportWebVitals from './reportWebVitals';

const wrap = ReactDOM.createRoot(document.getElementById('wrap'));
wrap.render(
   <React.StrictMode>
      <App />
      {/* <Main /> */}
      {/* <Ex /> */}
   </React.StrictMode>
);

reportWebVitals();
