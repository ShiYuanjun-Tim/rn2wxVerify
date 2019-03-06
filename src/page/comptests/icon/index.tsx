import * as React from 'react';
import { View, Text, } from 'react-native';
import { _alert } from "../../utils"
 import Yqbfont from './iconfont'
export default class Page extends React.Component<any,any> {

  scrollV = null
  raw:any
  ds:any;

  config = {
    // 定义需要引入的第三方组件
    // usingComponents: {
    //   // 'hey': './hey/index' // 书写第三方组件的相对路径
    // },
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "icontet ",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light",
    
  }

  constructor(prop){
    super(prop)
   
  }

 
  render() {

     return <View style={{flex:1, paddingTop: 40}}>
      <View><Text> icon  test</Text></View> 
      
      <Yqbfont name={"gw_lajitong"} color={'green'} size={28}>
        <Text>something outter</Text>
      </Yqbfont>
  

    </View>
  }
}
 