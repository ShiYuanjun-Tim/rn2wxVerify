import * as React   from 'react';
import { Text, View, ScrollView } from 'react-native';
 
import {_alert} from "../../utils"
import SimpleComp from "../../../comps/SimpleComp"
/* 
不能使用

function PureComp(){
  return <Text> i'm PureComps</Text> 
} */

export default class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
        age:18,
        ts: Date.now()
    }
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

  changerenderPropComp=()=>{
     this.setState({ts:Date.now()})
  }

  render() {
 
     return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
          {/* {PureComp()}   */}
          {/* {this.aUIGeneate()} */}
          <Text>i'm page ,the 'where' prop from parent won't comes : {this.props.where}</Text>
         <Text onPress={this.call}>call the simpleComp's method from ref.xxx</Text>
         <Text onPress={this.changerenderPropComp}>change text in renderPropComp</Text>

          <SimpleComp
            name="SimpleComp"  
            age ={this.state.age}
             ref={'sc'}
            renderPropComp = {<Text>{this.state.ts} i'm  component passed from Parent</Text>}
            onGetUI = {this.getUI}
            onClick = {this.onPress}
            click2 = {this.onPress}
          >
            <Text>{this.state.ts}  i'm a  children component</Text>
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
