import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';
import logo from '../images/Tree.svg';

import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const elfDebugEnzyme  = new ElfDebugEnzyme(true, 'App.test.js');

configure({ adapter: new Adapter() });


describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders header logo', () => {
        const wrapper = shallow(<Header/>);
        const myLogo = <img src={logo} className="App-logo" alt="logo"/>;
        elfDebugEnzyme.getFirst(wrapper, 'img');
        expect(wrapper.contains(myLogo)).toBe(true);
    });



});

