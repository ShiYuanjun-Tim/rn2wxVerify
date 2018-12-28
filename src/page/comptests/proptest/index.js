import React ,{Component} from 'react';
import { Text, View, ScrollView } from 'react-native';
 
import {_alert} from "../utils"

export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }
  config = {
    navigationBarTitleText: '样式',
  
  }

  feedCallExpression_isReferencedIdentifier  () {
    /* 对于  一下格式的代码会做处理
      必须是on开头。。。，而且是this.props来的
      var onXXX=this.props.acb;
      onXXX()
=>
    this.props.acb()
    */
    var { onClick, pStr }= this.props;
    onClick(pStr)

  }


  feedCallExpression_isReferencedMemberExpression (){
      /* 对于  一下格式的代码会做处理
      var onXXX=this.props.acb;
      onXXX.hhh()
=>
    this.props.acb.hhh()
    */
    var { onClick }= this.props;
    onClick.call()
    //以下不会处理不是on开头

    var { notonClick }= this.props;
    notonClick()
    //以下不会处理不是this.props来的

    var { onXXX }= this.method;
    onXXX.call()
  }

  method(str){
    this.props.onClick(str)
  }

  onPress(){
    _alert("onPress")
  }

  render() {

    const abc = Math.random();
    const strplaceholder = "hello str template"

     return (
      <ScrollView style={{backgroundColor:"pink"}}>      
      <View style={{flex:1,justifyContent:'center', alignItems:"flex-start",display: "flex", flexDirection: "column" }}>
      <Text>----Text tag----simi pass</Text>
        <Text> 
          <Text>simple text tag and view tag</Text>
          <Text>usage!</Text>
        </Text>   
        <Text>----str `xxx`----pass</Text>
        <Text>{`TemplateLiteral example-${strplaceholder}-${abc}`}</Text>
        <Text>---- style=xxxx----pass</Text>
        <Text style={{color:"red", backgroundColor: "green"}}>inline style example</Text>
        <Text>----[].map()----pass</Text>
        {
          [ 'array', "mapped","elements"].map((txt, i)=><Text key={i}>{txt}</Text>)
        }
        <Text>----a? xx: pp---pass</Text>
        {
          abc > 0.3 ? <View><Text> {"abc > 0.3" }</Text></View> : <View><Text>{"abc < 0.3"}</Text></View>
        }
         < Text onPress={this.onPress}>-- click - call this.xxx---------</Text>
         <Text>-------98------</Text>
         < Text onPress={this.props.onClick}>-- click - call this.props.onxx ---------</Text>

         <Text>-------f-----</Text>
         <Text>-------------</Text>
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text> 
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
        <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
        <Text>---------------</Text>
         <Text>-------------</Text>
         <Text>-------------</Text>
      </View>
      </ScrollView>  
    );
  }
}

// const styles = StyleSheet.create({
//   txt:{
//     color:"red"
//   }
// });
