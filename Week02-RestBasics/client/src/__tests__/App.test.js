import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('jest test', function() {

    fit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    /*it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        elfDebugEnzyme.getFirst(wrapper, 'h1', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
*/
    /*it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className='nine'>State: 9</p>;
        elfDebugEnzyme.getFirst(wrapper, 'p', true);
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });*/

});