import React from 'react';
import ReactDOM from 'react-dom';
import GitUser from '../Components/GitUser';
import AppInit from '../app-init';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitUser appInit={AppInit}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});