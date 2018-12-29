import React , { Component } from 'react';
// import {_alert} from "./page/utils"
// import Page from "./page/testList/List"
// import Page from "./page/styleTest/index"
// import Page from "./page/comptests/proptest/index"
import Page from "./page/comptests/adapter/index"
export default class App extends Component {

  config = {
    pages: [
      // 'page/testList/List',
      // "page/styleTest/index",
      // "page/comptests/proptest/index",
      "page/comptests/adapter/index",
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