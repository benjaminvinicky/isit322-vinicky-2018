import React, {Component} from 'react';
import logo from './logo.svg';
import './images/Tree.svg';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            foo: '',
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
        </div>

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