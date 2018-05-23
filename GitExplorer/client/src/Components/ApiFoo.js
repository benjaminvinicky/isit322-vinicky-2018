import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import styles from './undead-styles';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { yellow500 } from 'material-ui/styles/colors';

class ApiFoo extends Component {
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
            .then(function(response) {
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
                <p className="App-intro">state: {this.state.result}</p>
                <p className="App-intro">file: {this.state.file}</p>
                <p className="App-intro">status: {this.state.status}</p>
                <RaisedButton
                    id="queryServer"
                    label="Query API"
                    labelPosition="after"
                    icon={<FontIcon
                    className="material-icons"
                    color={yellow500}>android</FontIcon>}
                    primary={true}
                    style={styles.button}
                    onClick={this.queryServer}
                />
            </div>
        );
    }
}

export default ApiFoo;
