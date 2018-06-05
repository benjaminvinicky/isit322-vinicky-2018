import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import appInit from './app-init';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={themeDark}>
        <App appInit={appInit} />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
