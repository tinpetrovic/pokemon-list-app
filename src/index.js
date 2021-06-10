import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from "./GlobalStyles.js"
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';


ReactDOM.render(
  <Router>
    <GlobalStyles/>
    <App />
  </Router>,
  document.getElementById('root')
);

