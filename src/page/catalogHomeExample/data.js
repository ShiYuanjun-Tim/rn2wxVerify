import Sign from "../sign"
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
      data.sign = Sign(data)

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

  return fetch(parentCatalogList , {
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
  })
}