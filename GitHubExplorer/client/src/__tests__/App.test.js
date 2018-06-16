import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import appInit from '../app-init';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build/index';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles/index';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

configure({ adapter: new Adapter() });

describe('Jest App Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <App appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={appInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});