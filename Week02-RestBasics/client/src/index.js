import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import Micros from './Components/micros';
import appInit from './app-init';
import Header from './Components/Header';

ReactDOM.render(
    <div>
        <Header />
        <App appInit={appInit} />
        <hr />
        <Micros appInit={appInit} />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
