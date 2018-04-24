import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

