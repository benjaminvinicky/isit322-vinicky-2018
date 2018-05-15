import React from 'react';
import ReactDOM from 'react-dom';
import GitUser from '../Components/GitUser';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

configure({ adapter: new Adapter() });
describe('jest test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitUser appInit={AppInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders login Name after button click', () => {
        const wrapper = shallow(<GitUser appInit={AppInit} />);
        const login = <p className="App-intro">Login: Benjamin Vinicky</p>;
        wrapper.find('#getProfile').simulate('click');
        setTimeout(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(login)).toBe(true);
            done();
        }, 1);
    });

    it('renders user avatar after button click', () => {
        const wrapper = shallow(<GitUser appInit={AppInit} />);
        const picture = (
            <img className="App-intro, App-avatar" src="myURL" alt="avatar" />
        );
        wrapper.find('#getProfile').simulate('click');
        setTimeout(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(picture)).toBe(true);
            done();
        }, 1);
    });
});
