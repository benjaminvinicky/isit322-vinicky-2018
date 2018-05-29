import React, { Component } from 'react';
import 'whatwg-fetch';
import styles from './undead-styles';
import PropTypes from 'prop-types';
import  { Text, View, Button } from 'react-native';

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
            <View style={styles.gitContainer}>
                <Text>You Rang: {this.state.result}</Text>
                <Text>Message: {this.state.message}</Text>
                <View style = {styles.buttonView}>
                    <Button
                        title="Get Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={this.queryMicroYouRang}
                    />
                </View>
            </View>
        );
    }
}

export default Micro1;
