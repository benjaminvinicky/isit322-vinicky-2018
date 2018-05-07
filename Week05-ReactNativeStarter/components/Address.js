import React, {Component} from 'react';
import {
    Button,
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Flux from '../images/Flux.png';

export default class ReactNativeStarter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'Flux Says...',
            bar: 'Says What?!'
        };

    }

    fetchAddress = () => {
        //this.setState({foo:'fetcher king'});
        const that = this;
        const ip = 'ccalvert.com';
        fetch('http://' + ip + ':30027/you-rang')
            .then((response) => response.json())
            .then(function(result) {
                this.collection = result.allData;
                that.setState({
                    foo: result.result, bar: "Oh...hi."
                });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
    };

    render() {
        console.log('tst');

        return (
            <View style={styles.container}>
                <Text>Crash Lands EXPO!!!!</Text>
                <Image source={Flux} alt="CrashlandsMain" />
                <Text style={styles.instructions}>
                    {this.state.foo}
                </Text>

                <Button
                    onPress={this.fetchAddress}
                    title={this.state.bar}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);