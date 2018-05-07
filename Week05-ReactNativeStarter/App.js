import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeStarter from './components/Address';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ReactNativeStarter />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F56CF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

