// import Sign from "../sign"
import 'whatwg-fetch'

const parentCatalogList= "https://mapi.wanlitong.com/mobileapi/m2s/catalog/parentCatalogList.do"
const leafCatalogList = "https://mapi.wanlitong.com/mobileapi/m2s/catalog/leafCatalogList.json"


const temp = Object.freeze({
  appVersion: 'weapp',
  picAttr: "375_375",
  picType: "02",
  authType: "SHA1_1",
  coordinate: "168.49679,28.82855",
  machineNo: 'deviceId',
  msgVersion: "3.6.1",
  platform: 'weapp',
  reqAppId: "ios_app_wanlitong",
  repositoryId: 1681,
  screenSize: '960*480',
  client: "02", //01:app;02:h5;04:pc
  clientId: "02", //01:app;02:h5;04:pc
  custString: "add your own content",
  reqTime: "",
})

function formatReqBody(paramObj, type) {
	const formatter= {
		"application/x-www-form-urlencoded"(map) {
			return (Object ).entries(map).map((e) => e.join("=")).join("&");
		},
		"application/json"(obj) {
			return JSON.stringify(obj);
		},
	};
	return (formatter[type] || _warn.bind(null, type))(paramObj);
}

let fetch = self&&self.fetch
if(process.env.TARO_ENV === 'weapp') {
  fetch = function (url, { 
    method='POST',
    data={}
  } = {}) {
    return new Promise((res,rej)=>{

      data = Object.assign({},temp,data,{reqTime: Date.now()})
      // data.sign = Sign(data)

      wx.request({
        url: parentCatalogList,
        method,
        data: JSON.stringify(data),
        success:function(data , statusCode){
          res()
        },
        fail:function(err){
          rej(err)
        }
      })
    })
  }
}


export function getParentCatalogList(){

  /* return fetch(parentCatalogList , {
    method: 'POST',
    headers:{
      ['content-type']: 'application/x-www-form-urlencoded'
    },
    body: formatReqBody({
      yqbToken: ''
      ,authType: 'SHA1_1'
      ,coordinate: '168.49679,28.82855'
      ,custString: '1.36'
      ,machineNo: '864375028810514'
      ,msgVersion: '3.6.1'
      ,platform: 'ios'
      ,reqAppId: 'ios_app_wanlitong'
      ,reqTime: 1548069759627
      ,screenSize: '960*480'
      ,sign: '1448d9d01f57db513693fe51176d51a731e7a0c9'
    } ,'application/x-www-form-urlencoded')
  }).then(data=>{
     
    return data.json()
  }).catch(err=>{
    console.log('fail',err)
  }) */

return Promise.resolve({"body":{"compress":false,"encrypt":false,"message":"OK","mktEndDate":0,"mktPrice":false,"mktStartDate":0,"result":{"catalogList":[{"id":"2858","highLightCatalog":false,"catalogName":"热门推荐"},{"id":"1001","highLightCatalog":false,"catalogName":"手机数码"},{"id":"1002","highLightCatalog":false,"catalogName":"电脑/办公"},{"id":"1003","highLightCatalog":false,"catalogName":"家用电器"},{"id":"1004","highLightCatalog":false,"catalogName":"家居/家纺"},{"id":"3007","highLightCatalog":false,"catalogName":"服饰鞋帽"},{"id":"1006","highLightCatalog":false,"catalogName":"运动/户外"},{"id":"1005","highLightCatalog":false,"catalogName":"礼品/箱包"},{"id":"1007","highLightCatalog":false,"catalogName":"食品/酒水"},{"id":"1008","highLightCatalog":false,"catalogName":"美妆/个护"},{"id":"1009","highLightCatalog":false,"catalogName":"钟表/首饰"},{"id":"1010","highLightCatalog":false,"catalogName":"母婴用品"},{"id":"1011","highLightCatalog":false,"catalogName":"汽车用品"},{"id":"1012","highLightCatalog":false,"catalogName":"电子票券"}]},"statusCode":"0000"},"head":{"custString":"1.36","msgVersion":"3.6.1","reqAppId":"ios_app_wanlitong","reqTime":"1548511623711","rspCode":"0","rspDescription":"安全验证通过","rspTime":"1548511627044"}})
.then(raw=>{
  return raw.body.result.catalogList
})

}