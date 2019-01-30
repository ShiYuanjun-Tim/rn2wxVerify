import * as React  from 'react';
import {_alert} from "./page/utils"

// import Page from "./page/styleTest/index"
// import Page from "./page/comptests/proptest/index"
// import Page from "./page/comptests/adapter/clickable"
// import Page from "./page/comptests/adapter/scrollview"
import Page from "./page/comptests/adapter/template"
// import Page from "./page/catalogHomeExample"
 export default class App extends React.Component {

  config = {
    pages: [
      // "page/styleTest/index",
      // "page/comptests/proptest/index",
      // "page/comptests/adapter/clickable",
      // "page/comptests/adapter/scrollview",
      "page/comptests/adapter/template",
      // "page/catalogHomeExample/index",

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