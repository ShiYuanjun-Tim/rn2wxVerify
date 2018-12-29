import React ,{Component} from 'react';
import {  View } from 'react-native';
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
 

  render() {
 
     return (
       <View style={{flex:1,justifyContent:'center', alignItems:"center",display: "flex", flexDirection: "column" }}>
        
        <Button
          type="default"
          size="default"
          loading={true}
          plain="true"
          onPress={this.onPress}
        >
          primary buttom
        </Button>

        <Button
          type="warn"
          size="default"
          loading={true}
          plain="true"
          onPress={this.onPress}
        >
          primary buttom
        </Button>

        <Button
          type="primary"
          size="default"
          loading={true}
          plain="true"
          onPress={this.onPress}
        >
          primary buttom
        </Button>
      </View>
     );
  }
}

// const styles = StyleSheet.create({
//   txt:{
//     color:"red"
//   }
// });
