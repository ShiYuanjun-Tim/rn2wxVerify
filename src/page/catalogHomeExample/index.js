
import React ,{Component} from 'react';
import {  View ,Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {getParentCatalogList} from './data'

export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }
  config = {
    navigationBarTitleText: '组件适配',
  }

  componentDidMount(){
    // getParentCatalogList()

    if (process.env.TARO_ENV === 'weapp'){
      console.log(wx.getSystemInfoSync())

    }
  }

  onPress=()=>{
    _alert("onPress")
  }
 
  xx={uri:"https://ms.1qianbao.com/v6/images/2018/6/29/21530260266615.jpg"}
  render() {
  
      return (
       <View flexContainer style={{flex:1,justifyContent:'center', alignItems:"center", flexDirection:'row' , backgroundColor:'green', height:'100%' }}>
         <View style={{backgroundColor:'blue', flex:1, }}>
             <Text>left</Text>
            <View style={{backgroundColor:'gold', flex:1, height:200}}></View>   
            <View style={{backgroundColor:'red', flex:1, height:200}}></View>    
 
            <View style={{backgroundColor:'gold', flex:1, height:200}}></View>   
            <View style={{backgroundColor:'red', flex:1, height:200}}></View>    
            <View style={{backgroundColor:'gold', flex:1, height:200}}></View>   
            <View style={{backgroundColor:'red', flex:1, height:200}}></View>    
            <View style={{backgroundColor:'gold', flex:1, height:200}}></View>   
            <View style={{backgroundColor:'red', flex:1, height:200}}></View>    
            <View style={{backgroundColor:'gold', flex:1, height:200}}></View>   
            <View style={{backgroundColor:'red', flex:1, height:200}}></View>    
         </View>
         <View style={{backgroundColor:'red', flex:1}}>
         <Text>right</Text>
         </View>
      </View>
     );
  }
}

