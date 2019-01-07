import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {StyleBuilder} from "../../page/utils"
/* 
interface Props {
 type?: TYPE_DEFAULT | TYPE_PRIMARY | TYPE_WARN
 plain?: boolean,

} */

function px2dp(number) {
  return number / 2;
}

const TYPE_DEFAULT = "default"
const TYPE_PRIMARY = "primary"
const TYPE_WARN = "warn"

export default class Button extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    const {
      children,

      disabled = false,
      plain = false,
      type = TYPE_DEFAULT,
      style = {},

      ...others
    } = this.props;

    const generatestyle = builder.build({
      type, plain, disabled
    })

    const color = generatestyle.color;

    return (
      <TouchableOpacity {...others} style={[style,generatestyle]} disabled={disabled}>
        {
          typeof children === "string" ? <Text style={{color}}>{children}</Text> : children
        }
      </TouchableOpacity>
    );
  }
}



const primaryColor = "#09bb07";
const warnColor = "#e64340";

const bthBase = {
  height: px2dp(94),
  borderRadius: px2dp(10),
  fontSize: px2dp(36),
  paddingHorizontal: px2dp(28),
  justifyContent: "center",
  alignItems: "center"
};

const mainBtnStyle = {
  default: {
    color: "#000",
    backgroundColor: "#dedede"
  },

  primary: {
    color: "#fff",
    backgroundColor: primaryColor
  },

  warn: {
    color: "#fff",
    backgroundColor: warnColor
  }
}

const plainBtnStyle = {
  default: {
    color: "#000",
    borderColor: "#000",
    borderWidth:1,
    backgroundColor: "transparent"
  },

  primary: {
    color: primaryColor,
    borderColor: primaryColor,
    borderWidth:1,
    backgroundColor: "#transparent"
  },

  warn: {
    color: warnColor,
    borderColor: warnColor,
    borderWidth:1,
    backgroundColor: "#transparent"
  }
}


const builder = new StyleBuilder(bthBase)
  .addStyle(mainBtnStyle, "type")
  .narrowBy(plainBtnStyle, "plain")
  .addStyle({
    disabled: {
      opacity: 0.3
    }
  });
