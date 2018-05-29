import React from 'react';
//import ReactDOM from 'react-dom';
import GitUser from '../Components/GitUser';
import appInit from '../app-init';
//import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');

configure({ adapter: new Adapter() });

describe('jest test', function() {

    /*fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(shallow(<GitUser appInit={appInit} />), div);
        ReactDOM.unmountComponentAtNode(div);
    });*/

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
