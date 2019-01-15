import React ,{Component} from 'react';
import { Text, View,  StyleSheet, ScrollView } from 'react-native';
 
import {_alert} from "../utils"

export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }

  config = {
    navigationBarTitleText: '样式',
  }
 

  render() {
 
     return (
             
      <View style={{flex:1,justifyContent:'center', alignItems:"flex-start",display: "flex", flexDirection: "column" }}>
        <View style={{height: 50}}></View>
       
        <Text>1 sigle inline style [ok]</Text>
        <Text style={{fontSize: 20, color:"red"}}>check the font and color</Text>

        <Text>2 flex layout compare column [ok] </Text>
        <View style={{ height:100 }} flexContainer>
          <View style={{flex:1 ,backgroundColor:"red"}}></View>
          <View style={{flex:2, height: 40,width: 40 ,backgroundColor:"blue"}}></View>
          <View style={{flex:1,height: 30,width: 30 , backgroundColor:"green"}}></View>
        </View>

        <Text>3 flex layout compare row [ok] </Text>
        <View style={{height:100 ,flexDirection:"row" }} flexContainer >
          <View style={{flex:1,height: 30,width: 30 , backgroundColor:"blue"}}></View>
          <View style={{flex:2 , backgroundColor:"red"}}></View>
          <View style={{flex:1,height: 50,width: 30 , backgroundColor:"green"}}></View>
        </View>

        <Text> 4 array style [ok] </Text>
        <Text style={[{color: "red"}, {color: "blue"}, {backgroundColor: "red"}]}>font should be blue</Text>

        <Text> 5stylesheet [ok]</Text>
        <Text style={styles.txt}>font should be orange</Text>

        <Text> 6 mixed usage [ok]</Text>
        <Text style={[styles.txt, {backgroundColor :"green"}]}>font should be orange</Text>


      </View>
     
    );
  }
}

const styles =  StyleSheet.create({
  txt:{
    color:"orange",
    fontSize:22
  }
});
