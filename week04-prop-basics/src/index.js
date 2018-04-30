import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const myProps = {
    testProp: 3
};
const testProp = 2;

ReactDOM.render(<App myProps={{myProps, testProp}} />, document.getElementById('root'));
registerServiceWorker();
