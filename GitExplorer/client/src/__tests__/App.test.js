import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import UndeadHeader from '../Components/UndeadHeader';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build/index';
import ElfDebugEnzyme from '../ElfDebugEnzyme';

configure({ adapter: new Adapter() });

const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');


describe('Jest App Tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders App and UndeadHeader', () => {
        const wrapper = shallow(<App />);
        const header = <UndeadHeader />;
        elfDebugEnzyme.getFirst(wrapper, 'h2');
        expect(wrapper.contains(header)).toEqual(true);
    });
});