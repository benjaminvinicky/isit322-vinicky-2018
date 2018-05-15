import React from 'react';
import ReactDOM from 'react-dom';
import Micro1 from '../Components/Micro1';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

configure({ adapter: new Adapter() });

describe('jest test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Micro1 appInit={AppInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders youRang Hello after button click', () => {
        const wrapper = shallow(<Micro1 appInit={AppInit} />);
        const callMe = <p className="App-intro">You Rang: Hello</p>;
        wrapper.find('#callButton').simulate('click');
        setTimeout(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(callMe)).toBe(true);
            done();
        }, 1);
    });
});
