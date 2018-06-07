import React from 'react';
import ApiFoo from '../Components/ApiFoo';
import appInit from '../app-init';
import { configure, shallow } from 'enzyme';
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

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');

describe('API FOO Jest Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <ApiFoo appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<ApiFoo appInit={appInit} />);
        const statusParagraph = (
            <p className="App-intro">status: Mock Server Happy</p>
        );
        wrapper.find('#queryServer').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(statusParagraph)).toBe(true);
        }, 1);
    });

    it('renders default state of ', () => {
        const wrapper = shallow(<ApiFoo appInit={appInit} />);
        const statusParagraph = (
            <p className="App-intro">state: result will go here</p>
        );
        //elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(statusParagraph)).toBe(true);
    });
});
