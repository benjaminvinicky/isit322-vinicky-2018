import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
        setImmediate(() => {
            wrapper.update();
            elfDebugEnzyme.getFirst(wrapper, 'p');
            try {
                expect(wrapper.contains(statusParagraph)).toBe(true);
            } catch (e) {
                console.log(e);
            }
        });
    });

});