export function _alert(msg) {
  if (process.env.TARO_ENV === 'weapp') {
    wx.showModal({title:msg})
  }else{
    alert(msg)
  }
}