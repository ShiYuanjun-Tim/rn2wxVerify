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


  componentWillMount(){
    console.log('componentWillMount SimpleComp', this.props.obj)
  }

  componentDidMount(){
    console.log('componentDidMount SimpleComp', this.props.obj)

  }
 
  render () {
     return <View style={{display: "flex", flexDirection: "column"}}>
     
      <Text>Hello, {this.props.name}</Text>
      <Text>arr: {JSON.stringify(this.props.arr)}</Text>
      <Text>obj: {JSON.stringify(this.props.obj)}</Text>
      <Text>-----------</Text>
     </View>
  }
}

export default wrapComponent(SimpleComp,[st.arrFun,st.objFun])