import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"
import {wrapComponent} from "react-eflow";
import st from './store'

import OneProp from '../../comps/ShowOneProp'

class Page extends React.Component {

    defaultProps ={
      where:"no where"
    }
  constructor(prop) {
    super(prop)
    this.state={
      stateStr:"from state"
    }
  }

  componentWillMount(){
    
  }

  change = ()=>{
    st.objFun()
  }
  render() {
    
    return <View style={{ flex: 1, paddingTop: 40 }}>
      <OneProp name={"wangwang"}/> 
      <View><Text onPress={this.change}>eflow test , click to change</Text></View>
      <View><Text>this.props.where: {this.props.where}</Text></View>
      <View><Text>this.props.astring: {this.props.astring}</Text></View>
      <View><Text>this.props.obj: {JSON.stringify(this.props.obj) }</Text></View>
      <View><Text>this.state.stateStr : {this.state.stateStr }</Text></View>
    </View >
  }
}

// export default Page 
export default  wrapComponent(Page, [ st.strFun,st.objFun])