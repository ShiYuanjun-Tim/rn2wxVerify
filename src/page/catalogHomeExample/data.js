import Sign from "../sign"

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


let fetch = fetch
if(!fetch) {
  fetch = function (url, { 
    method='GET',
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
  }).then(data=>{
    debugger
  }).catch(err=>{
    debugger
  })
}