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

  click = (e) =>{
    this.props.onClick && this.props.onClick()
  }
  click2 = (e) =>{
    this.props.click2 && this.props.click2()
  }

  onGetUI= ()=>{
    _alert(this.props.onGetUI && this.props.onGetUI())
  }

  render () {
     return <View style={{display: "flex", flexDirection: "column"}}>
      <Text>1 [ok]-->数据属性</Text>
      <Text>Hello, {this.props.name}</Text>
      <Text>2 [ok]-->事件属性(非onXXX) `onClick`</Text>
      <Text onPress={this.props.onClick}>Click me [props.onClick]</Text>
      <Text onPress={this.click}>Click me [this.click]</Text>
      <Text style={{color : 'red'}}>3 [avoid]-->事件属性(非onXXX) `click2` WX无效/RN有效</Text>
      <Text onPress={this.props.click2}>Click me [props.click2]</Text>
      <Text onPress={this.click2}>Click me [this.click2]</Text>
      <Text style={{color : 'red'}}>4 [avoid]-->获取属性上方法的返回 WX无效/RN有效</Text>
      <Text onPress={this.onGetUI}>Click me尝试获取返回[props.onGetUI]</Text>

      <Text>5 [ok]-->prop is component ,its name should be `renderXXX`</Text>
      
       {this.props.renderPropComp}
      
      <Text>6 [ok]-->children</Text>
        {this.props.children}
     </View>
  }
}