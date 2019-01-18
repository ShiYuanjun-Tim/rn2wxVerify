export function _alert(msg) {
  if (process.env.TARO_ENV === 'weapp') {
    wx.showModal({title:msg||''})
  }else{
    alert(msg||'')
  }
}


/**
 * 根据预设置的样式 在build的时候根据配置选择合适样式合并成一个， 合并顺序和初始化顺序有关
 * 用于模拟css样式的  ‘.classA .classB .classC’时候样式的覆盖行为
 * 
const builder = new StyleBuilder(bthBase) //基础样式 不管build配置这里的样式都会存在
  .addStyle({    //当addStyle 存在第二参数时意思是有A/B/C3种type的样式集合a/b/c
    A:a
    B:b
    C c
  }, "type")  
  .narrowBy({  //narrowBy是用于细化之前样式所用，plain只可以是bool值，来决定是否用同名type值多对应的样式对象来覆盖之前的
    A:aa       
    B:bb
    C cc
  }, "plain")
  .addStyle({ //用对象的 disabled:true 值来选取下列的disabledStyleObj样式
    disabled: disabledStyleObj，
    classNameA: classStyObj
    classNameB: classStyObj
    ...
  });


      disabled = false,
      plain = true,
      type = ‘A’,
 

   builder.build({
      type:A, plain:true, disabled:true
    }) 这里会模拟这样的验格式行为
      style = Object.assign(bthBase, a, aa , disabledStyleObj)  

 */
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