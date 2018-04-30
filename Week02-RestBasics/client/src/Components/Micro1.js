import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class Micro1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youRang: props.appInit.youRang
        };
    }

    queryMicroYouRang = () => {
        const that = this;
        fetch('/api/bar')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState((json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">You Rang: {this.state.youRang}</p>
                <button id='callButton' onClick={this.queryMicroYouRang}>Query Micro</button>
            </div>
        );
    }
}

export default Micro1;