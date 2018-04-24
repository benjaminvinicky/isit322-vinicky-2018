import React from 'react';
import ReactDOM from 'react-dom';
import Micro1 from '../Components/Micro1';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Micro1/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});