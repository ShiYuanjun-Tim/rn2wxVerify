import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView  } from 'react-native';
 /* 
interface Props {
 type?: TYPE_DEFAULT | TYPE_PRIMARY | TYPE_WARN
 plain?: boolean,

} */
 
/*
scrollview的映射转化
WX -> RN

scroll-x	Boolean	false	允许横向滚动    horizontal = true
scroll-y	Boolean	false	允许纵向滚动
upper-threshold	Number / String	50	距顶部/左边多远时（单位px，2.4.0起支持rpx），触发 scrolltoupper 事件
lower-threshold	Number / String	50	距底部/右边多远时（单位px，2.4.0起支持rpx），触发 scrolltolower 事件
scroll-into-view	String		值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
scroll-with-animation	Boolean	false	在设置滚动条位置时使用动画过渡
enable-back-to-top	Boolean	false	iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 scrollsToTop
bindscrolltoupper	EventHandle		滚动到顶部/左边，会触发 scrolltoupper 事件
bindscrolltolower	EventHandle		滚动到底部/右边，会触发 scrolltolower 事件
bindscroll onScroll

*/
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


 
