import React, {Component} from 'react';
import logo from '../images/Tree.svg';
import '../css/App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: '',
            file: props.appInit.file,
            status: props.appInit.status,
            result: props.appInit.result
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
                <p className="App-intro">foo: {this.state.foo}</p>
                <p className="App-intro">state: {this.state.status}</p>
                <p className="App-intro">file: {this.state.file}</p>
                <button onClick={this.queryServer}>Bar</button>
                <button onClick={this.queryServer}>Query API</button>
                <button onClick={this.queryServer}>Query Mircro</button>
                <button onClick={this.queryServer}>Query Git API</button>
            </div>
        );
    }
}

export default App;