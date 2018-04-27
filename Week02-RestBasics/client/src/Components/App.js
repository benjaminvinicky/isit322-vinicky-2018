import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: props.appInit.file,
            status: props.appInit.status,
            result: props.appInit.result
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState((json));
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">state: {this.state.result}</p>
                <p className="App-intro">file: {this.state.file}</p>
                <p className="App-intro">result: {this.state.status}</p>
                <button onClick={this.queryServer}>Query API</button>
            </div>
        );
    }
}

export default App;