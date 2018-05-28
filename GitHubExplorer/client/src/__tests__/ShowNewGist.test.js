import React from 'react';
//import ReactDOM from 'react-dom';
import ShowNewGist from '../Components/ShowNewGist';
import AppInit from '../app-init';
//import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');

configure({ adapter: new Adapter() });

describe('jest test', function() {
    /*it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowNewGist appInit={AppInit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });*/

    it('renders getGist on button click', () => {
        const wrapper = shallow(<ShowNewGist appInit={AppInit}/>);
        const Gists = <p>Description: This is another test gist</p>;
        wrapper.find('#fetchGists').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(Gists)).toBe(true);
        }, 1);
    });

    it('renders default description value', () => {
        const wrapper = shallow(<ShowNewGist appInit={AppInit}/>);
        const callMe = <p>Description: unknown</p>;
        //elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(callMe)).toBe(true);
    });

    it('renders secondary description value on next click', () => {
        const wrapper = shallow(<ShowNewGist appInit={AppInit}/>);
        const Gists = <p>Description: test</p>;
        wrapper.find('#fetchGists').simulate('click');
        setTimeout(() => {
            wrapper.update();
            //elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(Gists)).toBe(true);
        }, 1);
    });

});
