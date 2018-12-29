import React,{Component} from "react"
import {View, Text} from "react-native"


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

  click = (e) =>{
    this.props.onClick && this.props.onClick()
  }
  click2 = (e) =>{
    this.props.click2 && this.props.click2()
  }

  render () {
     return <View style={{display: "flex", flexDirection: "column"}}>
     <Text>##-->data Prop###</Text>
      <Text>Hello, {this.props.name}</Text>
      <Text>##-->event Prop  `onClick`####</Text>
      <Text onPress={this.props.onClick}>Click me [props.onClick]</Text>
      <Text onPress={this.click}>Click me [this.click]</Text>
      <Text>##-->event Prop `click2` not woking#</Text>
      <Text onPress={this.props.click2}>Click me [props.click2]</Text>
      <Text onPress={this.click2}>Click me [this.click2]</Text>

      <Text>##-->prop is component ,its name should be `renderXXX`##</Text>
      
       {this.props.renderPropComp}
      
      <Text>##-->children###</Text>
        {this.props.children}
     </View>
  }
}