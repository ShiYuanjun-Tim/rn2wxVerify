import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import { _alert } from "../../utils"

import Comp from './iosComp'
 class Page extends React.Component {

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
  return ['A','B'].map(num=>{return <View key={num}><Text> {num}</Text> </View> } )
  }

  dobuleReturn222= () =>{
    return ['Ax','Bx'].map(num=>{return <View key={num}><Text> {num}</Text> </View> } )
   }


  tripuleReturn() {
  return ['A','B'].map(num=>{
      switch(num) {
        case "A" : {
          return <Text key="Aaa"> aaA </Text>
        }
        case "B" : {
          return <Text key="Bvv"> BBB </Text>
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
          <View style={style.test1}><Text> loading </Text> </View> 
        );
        break;
      }
      case "failed": {
        view =  <View style={style.test1}><Text> failed </Text> </View> 
        break;
      }
      case "loaded": {
        view =  <View style={style.test1}><Text> loaded </Text> </View> 
        break;
      }
      default: {
        view = def;
      }

    }
    return view;
  }  

  handler(){
    _alert("event triggered")
  } 

  // 测试参数名和map中一致
  hehe(num,index){
    const { number } = num
    
    let type = typeof number
    
    return index!==0 ? (  type =='number'? this._str(num):<View ><Text> hehe _num:{number}</Text></View> )
    :  this._num(num)
     
  }

  mix(num,index){

     const nm = num.number, isNum = (typeof nm !== 'number' )
     const isValid = nm != 0;

    return isValid
      ? (
       this.hehe(num, index)
      )
      : <Text>none</Text>  
  }

  _num(num){
    const { number ,bb = "" } = num
     
    return <View > {number ==0 ? null: this.aa(number , bb)}</View>
  }

  aa(number, bbname){
    return number ==0 ? null: <Text> {`hehe sss_num:${number} ${bbname}`}</Text>
  }



  render() {
     
    
    const a=[1,2,3]
    const des = {aa:'desA',b:{c:"cccc",d:'dddd'},d:["ee",'ff','others']}

    const mpe = [{ number: "one" }, { number: "two", bb: 'bb name' }, { number: 2 }, { number: 0 }].map((num, index) => {
      return this.mix(num, index)
    })

    return <View style={{ flex: 1, paddingTop: 40 }}>
        {/* {
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
     

      
      {
        [{number:"one"},{number:"two"}].map(num=>{
          return this._str(num)
        }  )
      }
      <Comp></Comp> 

      {this.nest()}     
       
        {mpe}
        */} 

{this.switchMethod('loading')} 
    </View >
  }

  // ############################
  nest(){
    return <View><Text> nest</Text> {this.nest1()} </View>
  }

  nest1(b='aaa', ...othre){
    return <View><Text>nest1 b:{b} {this.nest2('nest1')}</Text> </View>
  }

  nest2(a,b=100){
    const some = 100
    return   "nest2 receive a:"+a +" from upstream, result:"+ b * some
  }

}

const style = StyleSheet.create({
  test1:{
    backgroundColor:"red"
  }
})


export default Page
