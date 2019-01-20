import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"

export default class Page extends Component {

  constructor(prop){
    super(prop)
    this.state = {
      scVal:0
    }
  }
  myscrollHandler(e) {
    console.log('onScroll',e.nativeEvent || e.detail)
  }

  scrollTo =(e) =>{
     
     this.scrollV.scrollTo({x:100,y:100})
  }
  scrollTo2 =(e) =>{
     this.refs.sv2.scrollTo({x:100,y:100})
  }

  _scroll  = (v) =>{
    this.setState({scVal: v})
  }
  render() {
    return <View style={{flex:1, paddingTop: 40}}>
      <View><Text>1 vetical</Text></View> 
      <TouchableOpacity onPress={this.scrollTo}><Text> scroll to 100</Text></TouchableOpacity>
 
      <ScrollView    style={{ flex:1,  height:250}}   
      bounces={false}  ref={(ref)=>{
        debugger
        this.scrollV = ref}}
      contentContainerStyle = {{ backgroundColor:"blue"}}
      >
       <View style={{backgroundColor:"red", width:70, height:70 }}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View>
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View> 
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View> 
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View>
     </ScrollView>

     <Text>2 horizontal</Text>
     <TouchableOpacity onPress={this.scrollTo2}><Text>rn scroll to 100</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.scrollTo2}><Text>wx scroll to 100</Text></TouchableOpacity>

      <ScrollView  horizontal  bounces={false} onScroll={this.myscrollHandler} ref="sv2"
      contentContainerStyle = {{ backgroundColor:"gold" , height: 100}}>
       <View style={{backgroundColor:"red", width:70, height:70 }}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View>
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View> 
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View> 
      <View style={{backgroundColor:"red", width:70, height:70}}></View>
      <View style={{backgroundColor:"green", width:70, height:70}}></View>
     </ScrollView>

    </View>
  }
}