import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


/**
 * Styles
 * There are two styles imported here. 
 * 
 * The first one is sass file from scss
 * directory. If you use sass in your project start in that directory and add
 * your styles in the main.scss file.
 * 
 * The second one is css file from the css directory if you are using css in
 * in your project it is already imported and you can start there
 */
import "./static/sass/main.scss";
import "./static/css/main.css";

/**
 * Additional js file imports are added here
 */
import "./static/js/index";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
