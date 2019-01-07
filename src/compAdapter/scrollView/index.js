import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView  } from 'react-native';
 /* 
interface Props {
 type?: TYPE_DEFAULT | TYPE_PRIMARY | TYPE_WARN
 plain?: boolean,

} */
 
export default class ScrollViewWrapper extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    const {
      children,

      disabled = false,
      plain = false,
      type = TYPE_DEFAULT,

      ...others
    } = this.props;

    const generatestyle = builder.build({
      type, plain, disabled
    })

    const color = generatestyle.color;

    return (
      <TouchableOpacity {...others} style={generatestyle}>
        {
          typeof children === "string" ? <Text style={{color}}>{children}</Text> : children
        }
      </TouchableOpacity>
    );
  }
}


 
