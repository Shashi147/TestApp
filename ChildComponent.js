import React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emotion: "unhappy" };
  }

  //invoked before a mounted component receives new props
  componentWillReceiveProps(nextProps) {
    if (nextProps.applause) {
      this.setState({ emotion: "happy" });
      console.log("componentWillReceiveProps called  nextProps");
    }
  }
  render() {
    return (
      <View>
        <Text> I'm currently {this.state.emotion}</Text>
      </View>
    );
  }
}
