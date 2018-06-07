import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

class ApiFoo extends Component {
    static propTypes = {
        appInit: PropTypes.object.isRequired
    };
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
                <Button
                    id="queryServer"
                    color='primary'
                    variant='raised'
                    onClick={this.queryServer}
                >
                    <Icon>android</Icon> Query Server
                </Button>
            </div>
        );
    }
}

export default ApiFoo;
