
import * as React  from 'react';
import {  View ,Text, TouchableOpacity, ScrollView, Image , 
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
} from 'react-native';
import {getParentCatalogList} from './data'
import {_alert} from './../utils'

const {height,width} = Dimensions.get('window')
debugger
export default class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      catalog:[],
      selected:null
    }
  }
  config = {
    navigationBarTitleText: '组件适配',
  }

  componentDidMount(){
     getParentCatalogList().then(data=>{
       console.log("getParentCatalogList done ")
       const selected = this.state.selected
       this.setState({
        catalog:data,
        selected: selected || data[0].id
       })
     }).catch(err=>{debugger})

    if (process.env.TARO_ENV === 'weapp'){
      console.log(wx.getSystemInfoSync())

    }
    console.log(Dimensions.get('window'))
    console.log(PixelRatio.get())
    console.log(Platform.OS)
    console.log(Platform.select({
        wx:'this.is wx',
        ios: 'this.is ios'
    }))

  }

  onPress=()=>{
    _alert("onPress")
  }
 
  xx={uri:"https://ms.1qianbao.com/v6/images/2018/6/29/21530260266615.jpg"}
  render() {
  
      return (
       <View flexContainer style={{flex:1,justifyContent:'center', alignItems:"center", flexDirection:'row' , backgroundColor:'gold', height }}>
         <View flexContainer style={{backgroundColor:'blue', width:86 , height:'100%',}}>
           <ScrollView style={{ flex:1}} contentContainerStyle={{backgroundColor:'green'}}>
            {
              this.state.catalog.map((data , i)=>{
                const sty = data.id == this.state.selected ? styles.selected :{};
                 return <View key={data.id} style={[styles.cata,sty]}><Text>{data.catalogName}</Text></View> 
              })
            }
           </ScrollView>
         </View>

         <View style={{backgroundColor:'red', flex:1}}>
         <Text>right</Text>
         </View>

      </View>
     );
  }
}

const styles = (StyleSheet ).create({
  cata:{
    height:70,
    width:40
  },
  selected:{
    color: 'red'
  }
})