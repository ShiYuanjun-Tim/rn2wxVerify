import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"

export default class Page extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      casev: 'a'
    }
  }

  switch1(aplpha) {
    switch (aplpha) {
      case "a": {

        return <View><Text> switch a</Text></View>
      }
      case "b": {
        return <View><Text>switch b</Text></View>
      }
    }
  }



  render() {
     let view=null
    switch (this.state.casev) {
      case "a": {
        view= <View><Text> switch a</Text></View>
      }
      case "b": {
        view= <View><Text>switch b</Text></View>
      }
    }

    return <View style={{ flex: 1, paddingTop: 40 }}>
      {
        view
      }

    </View >
  }
}