import React from 'react';
import GistLister from '../Components/GistLister';
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

describe('Show New Gist jest test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <GistLister appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders getGist on button click', () => {
        const wrapper = shallow(<GistLister appInit={appInit}/>);
        const Gists = <p>Description: This is another test gist</p>;
        wrapper.find('#fetchGists').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(Gists)).toBe(true);
        }, 1);
    });

    it('renders default description value', () => {
        const wrapper = shallow(<GistLister appInit={appInit}/>);
        const callMe = <p>Description: unknown</p>;
        //elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(callMe)).toBe(true);
    });

    it('renders secondary description value on next click', () => {
        const wrapper = shallow(<GistLister appInit={appInit}/>);
        const Gists = <p>Description: test</p>;
        wrapper.find('#fetchGists').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(Gists)).toBe(true);
        }, 1);
    });

});
