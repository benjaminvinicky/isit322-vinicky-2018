import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import Micros from './Components/Micro1';
import appInit from './app-init';
import Header from './Components/Header';
import GitUser from './Components/GitUser';

ReactDOM.render(
    <div>
        <Header />
        <GitUser appInit={appInit}/>
        <hr />
        <Micros appInit={appInit} />
        <hr />
        <App appInit={appInit} />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
