import * as React from 'react';
import { View, Text, ListView,  Image } from 'react-native';
import { _alert } from "../../utils"
import { getParentCatalogList } from 'src/page/catalogHomeExample/data';


let id=0
function create_UUID(){
  return id++;
}

let batch = 0
const urls = [
     'http://www.wxapp-union.com/template/win8_2_zuk/src/logo.png',
    'http://www.wxapp-union.com/special/section1.png',
     'http://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpg',
];
function mockData(step=20){
  let b = ++batch
  const ts = Date.now()

  return  Array(step).fill(0).map(((v,ind)=>({
    batch: b,
    ts,
    id:create_UUID(),
    url :  urls[ind%urls.length ]
    dump:"http://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpghttp://www.wxapp-union.com/data/attachment/portal/201902/27/102919oftjbyb9fryy7e9e.jpeg.thumb.jpg"
  })))
} 


 class Page extends React.Component<any,any> {

  scrollV = null
  raw:any
  ds:any;

  config = {
    // 定义需要引入的第三方组件
    // usingComponents: {
    //   // 'hey': './hey/index' // 书写第三方组件的相对路径
    // },
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "微信接口功能演示",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  }

  constructor(prop){
    super(prop)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state ={
      dataSource: [],
      pp:'A'
    }
  }



  componentWillMount(){
 
    this.raw =  (mockData(10))

      this.setState({
        dataSource:this.ds.cloneWithRows( this.raw)
      })
     
  }

  // setState=(obj,call?: function)=>{
  //   super.setState(obj,call)
  // }


  getContent(pp){
    let view= null;
    switch(pp){

      case "A":{

        view = <ListView  style={{ flex:1,  height:500}}   
         dataSource={this.ds.cloneWithRows(this.state.dataSource)}
         renderRow={this.perrow}
         onEndReachedThreshold={100}
         onEndReached = {this.reachEnd}
        />;
        break;
      }
      default:{
        view=<Text > empty</Text>
      }
    }
    return view;

  }

  perrow = (data,sid:string,rowid)=>{
    console.log(sid)
    return <View  key={rowid} ss={rowid}>
       <Text onPress={this.click.bind(this,rowid)}>batch:{data.batch}-{data.id}</Text>
       <Text>url</Text>
      <Image source={{uri:data.url}} style={{width: 300 ,height:50}}  ></Image>
    </View>
  }

  click=(id:string)=>{
    console.log("click",id)
  }

  reachEnd =()=>{
       this.raw = this.raw.concat(mockData(100))
      
      this.setState({dataSource:this.raw})
   
  }
  huge= ()=>{
    this.setState({
      dataSource : mockData(1500)
    })
  }
  reload= ()=>{
    this.setState({
      dataSource : mockData(30)
    })
  }

  public ss(data){
    return <View><Text>{data.id}-{data.url}  </Text></View>
  } 
  public header(){
    return <View><Text> Header  </Text></View>
  } 
  public footer(){
    return <View><Text> Footer </Text></View>
  } 

  render() {

    let view= null;
    switch("A"){

      case "A":{

        view = <ListView  style={{ flex:1,  height:500}}   
         dataSource={this.ds.cloneWithRows(this.state.dataSource)}
         renderRow={this.perrow}
         onEndReachedThreshold={100}
         onEndReached = {this.reachEnd}
         renderHeader = {this.header}
         renderFooter = {this.footer}
        />;
        break;
      }
      default:{
        view=<Text > empty</Text>
      }
    }
     

     return <View style={{flex:1, paddingTop: 40}}>
      <View><Text onPress={this.huge}> load huge data</Text></View> 
      <View><Text onPress={this.reload}> reload data</Text></View>
      {/* <hey dataSource={this.state.dataSource}>
        {this.state.dataSource.map((data,index)=>{
          return this.perrow(data,'ss',index)
        })}
      </hey> */}
       
     {/* {this.getContent(this.state.pp)} */}
  
      {view}
    </View>
  }
}

export default Page;

/* 
 <ScrollView style={internal_inline_style({ flex: 1, height: 500 })} 
    lower-threshold={100} onscrolltolower={this.reachEnd} >
    {
      this.state.dataSource.map((arr)=>{
        return this.perRow(a,'',b)
      })
    }
 </ScrollView>
  
*/