import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { _alert } from "../../utils"
import {wrapComponent} from "react-eflow";
// import wrapComponent from './wrapComponent';
import st from './store'

// import OneProp from '../../comps/ShowOneProp'

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
    console.log('componentWillMount')
  }

  change = ()=>{
    st.objFun()
  }
  changeStr = ()=>{
    st.strFun()
  }
  changeArr = ()=>{
    st.arrFun()
  }
  render() {
    const wh = this.props.where
    const astr = this.props.astring
    return <View style={{ flex: 1, paddingTop: 40 }}>
      {/* <OneProp name={"wangwang"}/>  */}
      <View><Text onPress={this.changeStr}>eflow test , click to change astring</Text></View>
      <View><Text onPress={this.change}>eflow test , click to change obj</Text></View>
      <View><Text onPress={this.changeArr}>eflow test , click to change arr</Text></View>
      <View><Text>this.props.where: {wh}</Text></View>
      <View><Text>this.props.astring: astr=> {astr}</Text></View>
      <View><Text>this.props.astring: directly use=> {this.props.astring}</Text></View>
      <View><Text>this.props.obj: {JSON.stringify(this.props.obj) }</Text></View>
      <View><Text>this.props.arr: 不被监听不变 {JSON.stringify(this.props.arr) }</Text></View>
      <View><Text>this.state.stateStr : {this.state.stateStr }</Text></View>
    </View >
  }
}

// export default Page 
export default  wrapComponent(Page, [st.strFun, st.objFun])