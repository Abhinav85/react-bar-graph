import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const graphData = {
    width : 30,
    data : [
      {
        title : 'Title 1',
        value : 23,
        color : 'orange',
        placeholderData : 'Data for Title 1'
      },
      {
        title : 'Title 2',
        value : 12,
        color : 'blue'
      },
      {
        title : 'Title 3',
        value : 45,
        color : 'grey'
      },
      {
        title : 'Title 4',
        value : 67
      },
      
    ]
  }

ReactDOM.render(<App graphData = {graphData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
