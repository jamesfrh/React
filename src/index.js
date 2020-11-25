import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Assignment2 from './containers/Assignment2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
