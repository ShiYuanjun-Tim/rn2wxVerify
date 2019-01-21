import React ,{Component} from 'react';
import { Text, View, ScrollView } from 'react-native';
 
import {_alert} from "../../utils"
import SimpleComp from "../../../comps/SimpleComp"
// import PureComp from "../../../comps/PureComp"
/* 
不能使用

function PureComp(){
  return <Text> i'm PureComps</Text> 
} */

export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }
  config = {
    navigationBarTitleText: '组件测试',
  }

  method(str){
    this.props.onClick(str)
  }

  onPress(){
    _alert("onPress")
  }

  getUI= () =>{
    // 无法返回内容 这个方法是事件形式触发的
    return 'i\'m compProp component'

  }

  call=()=>{
    this.refs.sc.refCall()
  }
  render() {
 
     return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
          {/* {PureComp()}   */}
          {/* {this.aUIGeneate()} */}
          <Text onPress={this.call}>call the simpleComp's method from ref.xxx</Text>
          <SimpleComp
            name="SimpleComp"   ref={'sc'}
            renderPropComp = {<Text>i'm  component passed from Parent</Text>}
            onGetUI = {this.getUI}
            onClick = {this.onPress}
            click2 = {this.onPress}
          >
            <Text>i'm children component</Text>
          </SimpleComp>
      </View>
     );
  }
}

// const styles = StyleSheet.create({
//   txt:{
//     color:"red"
//   }
// });
