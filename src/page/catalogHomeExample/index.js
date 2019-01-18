
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

  componentWillMount(){
    getParentCatalogList()
  }

  onPress=()=>{
    _alert("onPress")
  }
 
  xx={uri:"https://ms.1qianbao.com/v6/images/2018/6/29/21530260266615.jpg"}
  render() {
  
      return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
         
      </View>
     );
  }
}

