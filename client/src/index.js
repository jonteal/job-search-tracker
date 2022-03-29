import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCxj5RRnvtL4Qv0AVipDUg-suZBfBJBJtI",
  authDomain: "fir-jobhunt.firebaseapp.com",
  projectId: "fir-jobhunt",
  storageBucket: "fir-jobhunt.appspot.com",
  messagingSenderId: "168953344900",
  appId: "1:168953344900:web:e99effe72308f6bd57a3d1",
  measurementId: "G-62X1VMDY0V"
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

