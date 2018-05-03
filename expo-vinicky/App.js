import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'unknown',
      result: 'unknown',
      youRang: 'unknown'
    }
  }

    fetchAddress = () => {
    console.log('called address');
        this.setState({foo: 'fetchAddress Button Clicked'});
    };

  fetchMicro = (event) => {
    const that = this;
    const ip = '168.156.47.60';
    fetch('http://' + ip + ':30027/you-rang')
        .then((response) => response.json())
        .then(function (result) {
        that.setState({
            re: result.result,
        });
    }).catch(function (ex) {
      that.setState({result: 'error'})
    });
  };

    fetchLocalMicro = (event) => {
      this.setState({youRang: 'Working...'});
        const that = this;
        const ip = '10.11.4.170';
        fetch('http://' + ip + ':30026/you-rang')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
            })
            .catch(function (ex) {
              that.setState({youRang: 'error'})
            });
    };

  render() {

    return (
      <View style={styles.container}>
        <Text>Isit322 React Native Benjamin</Text>
        <Text>Foo: {this.state.foo}</Text>
          <Text>Micro: {this.state.result}</Text>
          <Text>Local Micro: {this.state.youRang}</Text>
        <Button
            onPress={this.fetchAddress}
            title="Get Data"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
          <Button
              onPress={this.fetchMicro}
              title="Get Micro Data"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
          <Button
              onPress={this.fetchLocalMicro}
              title="Get Local Data"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('Address', () => Address);
