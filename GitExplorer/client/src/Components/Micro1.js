import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';


class Micro1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: props.appInit.result,
            message: props.appInit.message
        };
    }

    queryMicroYouRang = () => {
        const that = this;
        fetch('/api/you-rang')
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">You Rang: {this.state.result}</p>
                <p className="App-intro">Message: {this.state.message}</p>
                <button id='callButton' onClick={this.queryMicroYouRang}>Query Micro</button>
            </div>
        );
    }
}

export default Micro1;