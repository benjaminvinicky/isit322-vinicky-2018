import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/ApiFoo';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GitUser from "../Components/GitUser";
configure({ adapter: new Adapter() });

const elfDebugEnzyme  = new ElfDebugEnzyme(true, 'App.test.js');

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App appInit={AppInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App appInit={AppInit}/>);
        const statusParagraph = <p className="App-intro">status: Mock Server Happy</p>;
        wrapper.find('#queryServer').simulate('click');
        setTimeout(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            expect(wrapper.contains(statusParagraph)).toBe(true);
            done();
        }, 1);
    });

});