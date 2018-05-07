import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import appInit from './app-init';


ReactDOM.render(
    <div className="App">
        <App appInit={appInit} />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
