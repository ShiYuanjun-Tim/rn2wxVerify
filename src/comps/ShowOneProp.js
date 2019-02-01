import React,{Component} from "react"
import {View, Text} from "react-native"
import {_alert} from '../page/utils'

/* 
4 属性测试

name: string
onClick: function
compProp: ReactCompoent
children: ReactCompoent

*/

export default class SimpleComp extends Component {

  constructor(props){
    super(props);

  }
 
  render () {
     return <View style={{display: "flex", flexDirection: "column"}}>
     
      <Text>Hello, {this.props.name}</Text>
      
     </View>
  }
}