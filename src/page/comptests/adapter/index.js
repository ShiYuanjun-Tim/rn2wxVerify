import React ,{Component} from 'react';
import {  View ,Text, TouchableOpacity, ScrollView} from 'react-native';
import {Button} from "../../../compAdapter"
import {_alert} from "../../utils"
 
export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }
  config = {
    navigationBarTitleText: '组件适配',
  }


  onPress=()=>{
    _alert("onPress")
  }
 

  render() {
 
     return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
        
        <Button
          type="default"
          size="default"
          onPress={this.onPress}
        >
          default button
        </Button>

        <Button
          type="default"
          size="default"
          disabled
          onPress={this.onPress}
        >
          default disabled button
        </Button>

        <Button
          type="default"
          size="default"
          plain
          onPress={this.onPress}
        >
          default plain button
        </Button>
       
        <Text> ################ </Text>
        <Button
          type="warn"
          size="default"
          onPress={this.onPress}
        >
          warn button
        </Button>
        <Button
          type="warn"
          size="default"
          disabled
          onPress={this.onPress}
        >
          warn disabled button
        </Button>
        <Button
          type="warn"
          size="default"
          plain
          onPress={this.onPress}
        >
          warn plain button
        </Button>
        <Text> ################ </Text>
        <Button
          type="primary"
          size="default"
          onPress={this.onPress}
        >
          primary button
        </Button>
        <Button
          type="primary"
          size="default"
          disabled
          onPress={this.onPress}
        >
          primary disabled button
        </Button>
        <Button
          type="primary"
          size="default"
          plain={true}
          onPress={this.onPress}
        >
          primary plain button
        </Button>
        <Text> ################ </Text>
        <Text onPress={this.onPress}> click me </Text>
        <TouchableOpacity onPress={this.onPress}>
          <View><Text>click me </Text></View>
        </TouchableOpacity>
      </View>
     );
  }
}

