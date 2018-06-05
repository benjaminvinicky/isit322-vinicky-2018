import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import styles from './undead-styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

class Micro1 extends Component {
    static propTypes = {
        appInit: PropTypes.object.isRequired
    };
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
                <Button
                    id="callButton"
                    label="Query Micro"
                    labelPosition="after"
                    primary={true}
                    style={styles.button}
                    onClick={this.queryMicroYouRang}
                >
                    <Icon>arrow_back</Icon>
                </Button>
            </div>
        );
    }
}

export default Micro1;
