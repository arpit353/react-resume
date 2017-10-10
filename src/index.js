import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const json = require('./resume.json'); // load resume file

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
