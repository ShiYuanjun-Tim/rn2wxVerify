export function _alert(msg) {
  if (process.env.TARO_ENV === 'weapp') {
    wx.showModal({title:msg})
  }else{
    alert(msg)
  }
}



export class StyleBuilder {

  constructor(baseStyle = {}) {
    this.baseStyle = baseStyle;
  }

  _pickSequence = [];//设置样式的顺序
  _styleStore = {};//存储样式
  _lastSettedStyle = null; // 记录最近样式集的选项

  addStyle(styleObj, alias = null) {

    Object.keys(styleObj).forEach(k => {
      this[k] = () => {
        alias && (this._lastSettedStyle = {
          alias, value: k
        });

        return styleObj[k]
      }
    })

    if (alias) {
      this._pickSequence.push(alias);
    }

    return this;
  }

  narrowBy(styleObj, alias) {
    const followWithStyle = this._pickSequence[this._pickSequence.length - 1]
    this[alias] = function () {
      if (!this._lastSettedStyle
        || this._lastSettedStyle.alias !== followWithStyle) {
        throw new Error(`优先使用样式[${followWithStyle}]之后在进行${alias}的筛选`)
      }

      const sty = styleObj[this._lastSettedStyle.value]

      this._lastSettedStyle = {
        alias, value: true
      };
      return sty;
    }

    this._pickSequence.push(alias);
    return this;
  }

  build(config) {
    this._lastSettedStyle = null;

     
    const styArr = this._pickSequence.map(key => {
      const value = config[key];
      let prop = value;
      if (typeof value === "boolean") {
        prop = key
      }
      delete config[key]
      return value ? this[prop]() : {};
    })

    const other = Object.keys(config).map(key => {
      return config[key]?this[key]():{}
    })

    const all = Object.assign( {} ,this.baseStyle, ...styArr.concat(other));

    return all;
  }
}