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
 
  layout = ( e) => {
    const  {nativeEvent:{layout:{x,y,width,height}}} =e
    console.log(x, y, width, height)
  }
   
  refv =(ref)=>{
    this.view = ref
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentDidMount(){
    console.log('componentDidMount')  
   }

 


  render() {
     
    
     
    return <View style={{ flex: 1, paddingTop: 50 }}  onLayout={this.layout}  ref={this.refv} >

        <View   onLayout={this.layout} ref={(refsass)=>{
          console.log('refsass aloyout')

        }}  >
          <Text >fsdfsdfsdfsdf</Text>
        {[1, 2, 3, 4].map((e,index) => {
          return <View onLayout={this.layout}> <Text >1111fsdfsdfsdfsdf</Text></View>
        })}
           
        </View>
      
    </View >
  }

}

// export default Page