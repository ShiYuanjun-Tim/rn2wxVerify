import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "../../../compAdapter"
import { _alert } from "../../utils"


export default class Page extends Component {

  render() {
    return <ScrollView    style={{backgroundColor : "yellow" , flex:1}} 
    contentContainerStyle = {{ backgroundColor:"blue"}}>
       <View style={{backgroundColor:"red", width:150, height:150 }}></View>
      <View style={{backgroundColor:"green", width:150, height:150}}></View>
      <View style={{backgroundColor:"red", width:150, height:150}}></View>
      <View style={{backgroundColor:"green", width:150, height:150}}></View> 
      <View style={{backgroundColor:"red", width:150, height:150}}></View>
      <View style={{backgroundColor:"green", width:150, height:150}}></View> 
      <View style={{backgroundColor:"red", width:150, height:150}}></View>
      <View style={{backgroundColor:"green", width:150, height:150}}></View>
     </ScrollView>
  }
}