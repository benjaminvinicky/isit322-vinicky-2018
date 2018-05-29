import React from 'react';
//import ReactDOM from 'react-dom';
import UndeadHeader from '../Components/UndeadHeader';
import logo from '../images/Tree.svg';
//import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'material-ui';

//const elfDebugEnzyme = new ElfDebugEnzyme(false, 'ApiFoo.test.js');

configure({ adapter: new Adapter() });

describe('UndeadHeader jest test', function() {
    /*fit('renders UndeadHeader without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<router><UndeadHeader /></router>, div);
    });*/

    it('renders header logo', () => {
        const wrapper = shallow(<UndeadHeader />);
        const myLogo = <img src={logo} className="App-logo" alt="logo" />;
        //elfDebugEnzyme.getFirst(wrapper, 'img');
        expect(wrapper.contains(myLogo)).toBe(true);
    });
});
