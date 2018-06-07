import React from 'react';
import GitUser from '../Components/GitUser';
import { configure, shallow } from 'enzyme';
import appInit from '../app-init';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles/index';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

configure({ adapter: new Adapter() });

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <GitUser appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders login Name after button click', () => {
        const wrapper = shallow(<GitUser appInit={appInit} />);
        const login = <p className="App-intro">Login: Benjamin Vinicky</p>;
        wrapper.find('#getProfile').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(login)).toBe(true);
        }, 1);
    });

    it('renders user avatar after button click', () => {
        const wrapper = shallow(<GitUser appInit={appInit} />);
        const picture = (
            <img className="App-intro, App-avatar" src="myURL" alt="avatar" />
        );
        wrapper.find('#getProfile').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(picture)).toBe(true);
        }, 1);
    });

    it('renders default data', () => {
        const wrapper = shallow(<GitUser appInit={appInit} />);
        const link = <p className="App-intro">Account Page: <a href='blank' target='blank'>blank</a></p>;
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(link)).toBe(true);
        }, 1);
    });

});
