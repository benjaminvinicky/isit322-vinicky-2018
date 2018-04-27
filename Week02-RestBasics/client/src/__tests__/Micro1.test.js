import React from 'react';
import ReactDOM from 'react-dom';
import Micro1 from '../Components/Micro1';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Micro1 appInit={AppInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});