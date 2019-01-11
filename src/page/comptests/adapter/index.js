import React ,{Component} from 'react';
import {  View ,Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Button} from "../../../compAdapter"
import {_alert} from "../../utils"

export default class Page extends Component {

  constructor(props) {
    super(props)
    
  }
  config = {
    navigationBarTitleText: '组件适配',
  }


  onPress=()=>{
    _alert("onPress")
  }
 
  xx={uri:"https://ms.1qianbao.com/v6/images/2018/6/29/21530260266615.jpg"}
  render() {
    const uriObj = {uri:"https://ms.1qianbao.com/v6/images/2018/6/29/21530260266615.jpg"};
    const a = {d:"strech"}
    const mode = a.d
      return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
        
        <Button
          type="default"
          size="default"
          onPress={this.onPress}
        >
          default button
        </Button>

        <Button
          type="default"
          size="default"
          disabled
          onPress={this.onPress}
        >
          default disabled button
        </Button>

        <Button
          type="default"
          size="default"
          plain
          onPress={this.onPress}
        >
          default plain button
        </Button>
       
        <Text> ################ </Text>
        <Button
          type="warn"
          size="default"
          onPress={this.onPress}
        >
          warn button
        </Button>
        <Button
          type="warn"
          size="default"
          disabled
          onPress={this.onPress}
        >
          warn disabled button
        </Button>
        <Button
          type="warn"
          size="default"
          plain
          onPress={this.onPress}
        >
          warn plain button
        </Button>
        <Text> ################ </Text>
        <Button
          type="primary"
          size="default"
          onPress={this.onPress}
        >
          primary button
        </Button>
        <Button
          type="primary"
          size="default"
          disabled
          onPress={this.onPress}
        >
          primary disabled button
        </Button>
        <Button
          type="primary"
          size="default"
          plain={true}
          onPress={this.onPress}
        >
          primary plain button
        </Button>
        <Text> ################ </Text>
        <Text onPress={this.onPress}> click Text </Text>
        <TouchableOpacity onPress={this.onPress}>
          <View><Text>click Touchable </Text></View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onPress}>
          <Image source={{uri:"https://ms.1qianbao.com/v5/images/2017/9/11505879997594.jpg"}} 
          style={{width: 66, height: 58}}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPress}>
          <Image source={require('../../../../assets/pic1533634910480.png')} 
          style={{width: 66, height: 58}}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPress}>
          <Image source={this.xx} resizeMode={mode}
          style={{width: 100, height: 200}}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onPress}>
          <Image source={this.xx} resizeMode={mode}
          style={{width: 100, height: 200}}></Image>
        </TouchableOpacity>
      </View>
     );
  }
}

