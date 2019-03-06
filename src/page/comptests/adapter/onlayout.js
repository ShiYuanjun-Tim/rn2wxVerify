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
 
  layout(e){
    console.log(e)
  }
  refv =(ref)=>{
    this.view = ref
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(()=>{
      this.setState({casev:'b'})
    })
  }

  render() {
     
    
     
    return <View style={{ flex: 1, paddingTop: 40 }}>

        <View onLayout={this.layout} ref={this.refv}>
          <Text >fsdfsdfsdfsdf</Text>
          <View> <Text >fsdfsdfsdfsdf</Text></View>
          <View ref='dd2'> <Text >fsdfsdfsdfsdf</Text></View>
          <View> <Text >fsdfsdfsdfsdf</Text></View>
          <View> <Text >fsdfsdfsdfsdf</Text></View>
        </View>
      
    </View >
  }

  // ############################
  nest(){
    return <View><Text> nest</Text> {this.nest1()} </View>
  }

  nest1(b='aaa', ...othre){
     return <View><Text>nest1 b:{b} </Text> </View>
  }
 

}

// export default Page