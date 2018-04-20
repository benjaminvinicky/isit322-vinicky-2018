import React, {Component} from 'react';
import logo from './images/Tree.svg';
import './css/App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            foo: '',
        };
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">foo: {this.state.foo}</p>
                <p className="App-intro">
                    state: {this.state.status}
                </p>
                <p className="App-intro">
                    file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
            </div>
        );
    }
}

export default App;