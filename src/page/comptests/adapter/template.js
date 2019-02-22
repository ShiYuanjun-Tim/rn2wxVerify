import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"

import Comp from './iosComp'
export default class Page extends React.Component {

  constructor(prop) {
    super(prop)
    this.state = {
      casev: 'a'
    }
  }

  
  simpleParam(a,b){
    return <View><Text> simpleParam fun[ a:{a}, b:{b + this.state.casev}]</Text></View>
  }

  simpleObjParam({a,b}){
    return <View><Text> simpleObjParam fun[ a:{a}, b:{b}]</Text></View>
  }

  destructureArg({ aa: a, b: { c: dd = 1, ...otr }, d: [e, f,...elses] }) {
    return <View>
      <Text onPress={this.handler}>destructureArg</Text>
      <View><Text>   aa:{a}, c:{dd}, others in b:{JSON.stringify(otr)} </Text></View>
      <View><Text> e:{e}, f:{f}, others in arr:{JSON.stringify(elses)}</Text></View>
    </View>
  }

  dobuleReturn() {
  return ['A','B'].map(num=>{return <View><Text> {num}</Text> </View> } )
  }

  dobuleReturn222= () =>{
    return ['Ax','Bx'].map(num=>{return <View><Text> {num}</Text> </View> } )
   }


  tripuleReturn() {
  return ['A','B'].map(num=>{
      switch(num) {
        case "A" : {
          return <Text> aaA </Text>
        }
        case "B" : {
          return <Text> BBB </Text>
        }
      }
  } )
  }

  propMethod=(smoe)=><View><Text> propMethod {smoe}</Text> </View>  
   
  switchMethod = (loadStatus) => {
     let view = null;
     const def = null//<View><Text> default </Text> </View>
    switch (loadStatus) {
      case "loading": {
        view = (
          <View><Text> loading </Text> </View> 
        );
        break;
      }
      case "failed": {
        view =  <View><Text> failed </Text> </View> 
        break;
      }
      case "loaded": {
        view =  <View><Text> loaded </Text> </View> 
        break;
      }
      default: {
        view = def;
      }

    }
    return view;
  }  


  // evtFun(click){
  //   return <View><Text onPress={click}> generate by evtfun[ click me]</Text></View>
  // }

  handler(){
    _alert("event triggered")
  }

  // 测试参数名和map中一致
  hehe(num){
    const { number } = num
    return <View><Text> hehe {number}</Text></View>
  }

  render() {
     
    
    const a=[1,2,3]
    const des = {aa:'desA',b:{c:"cccc",d:'dddd'},d:["ee",'ff','others']}

    return <View style={{ flex: 1, paddingTop: 40 }}>
        {
        this.simpleParam(1,2) 
      }
      {
        this.simpleParam(111,222) 
      } 
      { this.simpleObjParam({a:'aaa', b:'bbb'})}

      {this.destructureArg(des)}  

      <View>
        {this.dobuleReturn(123)} 
        {this.dobuleReturn222(22)}
      </View>
      

      {this.propMethod('111')} 

      {this.tripuleReturn()}  
       
      {this.switchMethod('loading')}   
     

      {<Text> 111</Text>}
      {
        [{number:"one"},{number:"two"}].map(num=>{
          return this.hehe(num)
        }  )
      } 
      <Comp></Comp>
    </View >
  }
}

// export default Page