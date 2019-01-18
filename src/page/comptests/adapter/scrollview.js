import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"


export default class Page extends Component {

  render() {
    return <View style={{flex:1}}>
      <Text>1 vetical</Text>
      <ScrollView    style={{ flex:1,  height:250}} bounces={false} 
      contentContainerStyle = {{ backgroundColor:"blue"}}>
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
      <ScrollView  horizontal  style={{  }}  bounces={false}
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