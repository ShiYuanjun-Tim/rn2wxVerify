import * as React from 'react';
import { View, Text } from 'react-native';
 
 export default class Page extends React.Component {

  constructor(prop) {
    super(prop)
    
  }
 


  render() {
      

    return <View style={{ flex: 1, paddingTop: 40 }}>
      <Text>i'm iosComp from *.ios.js</Text>
    </View >
  }
}