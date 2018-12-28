import React , { Component } from 'react';
// import {_alert} from "./page/utils"
// import Page from "./page/testList/List"
import Page from "./page/styleTest/index"
export default class App extends Component {

  config = {
    pages: [
      // 'page/testList/List',
      "page/styleTest/index"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  render() {
    return (
      <Page/>
    );
  }
}