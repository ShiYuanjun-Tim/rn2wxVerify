import * as React  from "react"
import {View, Text} from "react-native"
import {_alert} from '../page/utils'
import {wrapComponent} from "react-eflow";
import st from '../page/eflow/store'

/* 
4 属性测试

name: string
onClick: function
compProp: ReactCompoent
children: ReactCompoent

*/

 class SimpleComp extends React.Component {

  constructor(props){
    super(props);

  }
 
  render () {
     return <View style={{display: "flex", flexDirection: "column"}}>
     
      <Text>Hello, {this.props.name}</Text>
      <Text>arr: {JSON.stringify(this.props.arr)}</Text>
      
     </View>
  }
}

export default wrapComponent(SimpleComp,[st.arrFun])