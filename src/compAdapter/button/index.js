import React ,{Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
 

export default class Button extends Component {

  constructor(props) {
    super(props)
  }
  

  render() {
 
    const content = this.props.children;
     return (
      <TouchableOpacity>
        {
           typeof content === "string" ? <Text>{content}</Text> : content
        }
      </TouchableOpacity>
     );
  }
}

// const styles = StyleSheet.create({
//   txt:{
//     color:"red"
//   }
// });
