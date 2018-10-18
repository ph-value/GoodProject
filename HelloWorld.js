import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  AppRegistry
} from "react-native";

const instructions = Platform.select({
  ios: "Hi! IOS user!",
  android: "Hi! Android user!"
});

type Props = {};

Component.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default class HelloWorld extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
