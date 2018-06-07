import React from 'react';
import Micro1 from '../Components/Micro1';
import appInit from '../app-init';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles/index';
import ReactDOM from 'react-dom';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');

configure({ adapter: new Adapter() });

describe('jest test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <Micro1 appInit={appInit}/>
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders youRang Hello after button click', () => {
        const wrapper = shallow(<Micro1 appInit={appInit}/>);
        const callMe = <p className="App-intro">You Rang: Hello</p>;
        wrapper.find('#callButton').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(callMe)).toBe(true);
        }, 1);
    });

    it('renders default values', () => {
        const wrapper = shallow(<Micro1 appInit={appInit}/>);
        const callMe = <p className="App-intro">You Rang: result will go here</p>;
        //elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(callMe)).toBe(true);
    });
});
