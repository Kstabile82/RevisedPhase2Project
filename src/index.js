import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
// import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

ReactDOM.render(

    <BrowserRouter>
     <AlertProvider template={AlertTemplate} >
       <App />
       </AlertProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals();
