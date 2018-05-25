import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { yellow500 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

class GitUser extends Component {
    static propTypes = {
        appInit: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            name: props.appInit.name,
            pic: props.appInit.pic
        };
    }

    queryGitAPIUser = () => {
        const that = this;
        fetch('/api/git-user')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json.body);
                that.setState({
                    name: json.body.name,
                    pic: json.body.avatar_url
                });
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
                <p className="App-intro">Login: {this.state.name}</p>
                <img
                    className="App-intro, App-avatar"
                    src={this.state.pic}
                    alt="avatar"
                />
                <br />
                <RaisedButton
                    label="Query git api"
                    onClick={this.queryGitAPIUser}
                    icon={
                        <FontIcon className="material-icons" color={yellow500}>
                            android
                        </FontIcon>
                    }
                    labelPosition="after"
                    primary={true}
                />
            </div>
        );
    }
}

export default GitUser;
