import * as React  from 'react';
import {_alert} from "./page/utils"

// import Page from "./page/styleTest/index"
// import Page from "./page/comptests/proptest/index"
// import Page from "./page/comptests/adapter/clickable"
// import Page from "./page/comptests/adapter/scrollview"
// import Page from "./page/comptests/adapter/template"
import Page from "./page/comptests/adapter/layouttest"
// import Page from "./page/eflow/index"
// import Page from "./page/catalogHomeExample"
// import Page from "./page/comptests/listView/index"
// import Page from "./page/comptests/icon/index"

 export default class App extends React.Component {

  config = {
    pages: [
      // "page/styleTest/index",
      // "page/comptests/proptest/index",
      // "page/comptests/adapter/clickable",
      // "page/comptests/adapter/scrollview",
      // "page/comptests/adapter/template",
      "page/comptests/adapter/layouttest",
      // "page/eflow/index",
      // "page/catalogHomeExample/index",
      // "page/comptests/listView/index",
      // "page/comptests/icon/index",

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
      <Page where="from app"/>
    );
  }
}