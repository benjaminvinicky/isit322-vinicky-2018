import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import styles from './undead-styles';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { yellow500 } from 'material-ui/styles/colors';


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
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">You Rang: {this.state.result}</p>
                <p className="App-intro">Message: {this.state.message}</p>
                <RaisedButton
                    id="callButton"
                    label="Query Micro"
                    labelPosition="after"
                    icon={<FontIcon
                    className="material-icons"
                    color={yellow500}>android</FontIcon>}
                    primary={true}
                    style={styles.button}
                    onClick={this.queryMicroYouRang}
                />
            </div>
        );
    }
}

export default Micro1;
