import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Taro from '@tarojs/taro'
import { _alert } from "../utils"
import Stylepage from "../styleTest"
export default class Page extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: ""
    }
  }
  pageMap = {
    style: "../styleTest/index"
  }

  config = {
    navigationBarTitleText: "测试列表"
  }

  navi2 = (pageKey) => {
    if(process.env.TARO_ENV == "weapp") {
      wx.navigateTo({
        url:this.pageMap[pageKey],
      })
    }else {
      this.setState({ page: pageKey })
    }
  }

  navi1 = this.navi2.bind(this, "style")

  render() {

    let page;
    switch (this.state.page) {
      case "style": { page = <Stylepage />; break; }
      default: { page = <Text>NO Page</Text>; }
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}>
        <Text onPress={this.navi1}>样式测试页</Text>
        {page}
      </View>

    );
  }
}
