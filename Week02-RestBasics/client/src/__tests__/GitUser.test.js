import React from 'react';
import ReactDOM from 'react-dom';
import GitUser from '../Components/GitUser';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GitUser/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});