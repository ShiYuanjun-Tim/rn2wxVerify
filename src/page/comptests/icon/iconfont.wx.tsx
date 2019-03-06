import * as React from 'react';
import { View, Text, } from 'react-native';
import { _alert } from "../../utils"
 
export default class Yqbfont extends React.Component<any,any> {

  config = {
    usingComponents: {
      'yqbfont': './yqbfont/index' // 书写第三方组件的相对路径
    },
  }

  render() {

     return <yqbfont name={this.props.name} color={this.props.color} size={this.props.size}>
       {this.props.children}
      </yqbfont>
  
 
  }
}
 