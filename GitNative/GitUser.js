import React, {Component} from 'react';
import 'whatwg-fetch';
import styles from './undead-styles';
import PropTypes from 'prop-types';
import  { Text, View, Button } from 'react-native';

class GitUser extends Component {
    static propTypes = {
        appInit: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            name: props.appInit.name,
            pic: props.appInit.pic,
            login: props.appInit.login,
            url: props.appInit.url,
            location: props.appInit.location,
            company: props.appInit.company
        };
    }

    queryGitAPIUser = () => {
        const that = this;
        fetch('/api/git-user')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json.body);
                that.setState({
                    name: json.body.name,
                    pic: json.body.avatar_url,
                    login: json.body.login,
                    url: json.body.html_url,
                    location: json.body.location,
                    company: json.body.company
                });
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <View style={styles.gitContainer}>
                <Text>Login: {this.state.name}</Text>
                <Text>Username: {this.state.login}</Text>
                <Text>Account Page: <a href={this.state.url}target='blank'>{this.state.url}</a></Text>
                <Text>Location: {this.state.location}</Text>
                <Text>Company: {this.state.company}</Text>
                <View style={styles.buttonView}>
                <Button
                    onPress={this.queryGitAPIUser}
                    title="Log in now"
                    color="#841584"
                />
                </View>
                <Button
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={this.queryMicroYouRang}
                />
            </View>
        );
    }
}

export default GitUser;
