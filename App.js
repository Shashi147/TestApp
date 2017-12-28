/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Picker } from "react-native";
import ChildComponent from "./ChildComponent";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    console.log("constructor called");

    super(props);

    this.state = {
      count: 0,
      applause: false,
      language: "Select"
    };

    // this.Add = this.Add.bind(this);

    // this.Remove = this.Remove.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  Add() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ applause: true });
  }

  Remove() {
    this.setState({ count: this.state.count - 1 });
  }

  //invoked before a mounted component receives new props
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps called");
  }

  // called after some state update
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");

    return true;
  }

  //called after  shouldComponentUpdate
  componentWillUpdate() {
    console.log("componentWillUpdate called");
  }

  // called after render
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
  render() {
    console.log("render called");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{this.state.count}</Text>
        <View style={{ margin: 10, width: 200 }}>
          <Button title="Add" onPress={() => this.Add()} />
        </View>
        <View style={{ margin: 10, width: 200 }}>
          <Button title="Remove" onPress={() => this.Remove()} />
        </View>
        <View>
          <ChildComponent applause={this.state.applause} />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 20 }}>Picker in reactnative</Text>
          <Picker
            style={{ width: 200 }}
            selectedValue={this.state.language}
            onValueChange={lang => this.setState({ language: lang })}
          >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
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
