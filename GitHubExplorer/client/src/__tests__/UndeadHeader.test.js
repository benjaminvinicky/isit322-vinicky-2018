import React from 'react';
import UndeadHeader from '../Components/UndeadHeader';
import logo from '../images/Tree.svg';
import { configure, shallow } from 'enzyme';
import '@material-ui/core';
import appInit from '../app-init';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles/index';
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('UndeadHeader jest test', function() {

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <UndeadHeader appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<UndeadHeader />);
        const target = <Typography>
            GitExplorer
        </Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

});
