/*
 * author: shiyuanjun
 * taro在wx 中使用eflow时的wrap方法
 * */

 import invariant from 'invariant';
import shallowEqual from 'shallowequal';
// 如果放在eflow库里可以使用下列导入方式
/* import {isFunction, isArray} from './types';
import pubSub from './pubSub';
import Store from './Store';
import {getPrototypeMethods} from './prototype';
import {getOriginalMethodName, getMethodName} from './method';
import {replaceElement} from './Array'; */

import {isFunction, isArray} from 'react-eflow/lib/types';
import pubSub from 'react-eflow/lib/pubSub';
import Store from 'react-eflow/lib/Store';
import {getPrototypeMethods} from 'react-eflow/lib/prototype';
import {getOriginalMethodName, getMethodName} from 'react-eflow/lib/method';
import {replaceElement} from 'react-eflow/lib/Array';

/*
* 根据当前组件绑定的store获取相关state数据
* @param {Store} store 商店类对象
* @param {String} propsKey 更新器名称
* @param {Function} updater 更新器
* @param {Function} customPropsMapping 用户自定义映射
* @param {Boolean} forceUpdate 是否需要设置组件的state, 使state起作用
* */
function getState(store, propsKey, updater, customPropsMapping, forceUpdate) {
  let state = this._eflowstate;
  if(propsKey && updater){
    state[propsKey] = store.data(updater);
  }
  if(customPropsMapping){
    Object.assign(state, customPropsMapping(state, this.props));
  }

  return state;
}

/*
 * 执行Store初始化
 * */
function execInitStores(component, customPropsMapping) {
  let state = getState.call(component, null, null, null, customPropsMapping);
  return Object.assign(component.state, state);
}
/*
* 包装用户组件, 包装后的组件绑定stores并初始化stores,
* 把相关state值更新到被包装组件props中
* */
let wrapComponent = function(_Component, updaters, customPropsMapping){
  //装饰方式处理
  if(_Component == null || isArray(_Component)){
    customPropsMapping = updaters;
    updaters = _Component;
    _Component = null;
    return function (target) {
      return createWrapComponent(target);
    }
  }
  return createWrapComponent(_Component);

  function createWrapComponent(_Component) {
    if((!updaters || !updaters.length) && !customPropsMapping){
      return _Component;
    }

    class DataPool  extends _Component {
      constructor(props){
        super(props)
        this._eflowstate = {};
       }

      componentWillMount(){
        super.componentWillMount()
        console.log('DataPool.componentWillMount')
        // 这里不在构造函数中初始化时因为 只有明确被加载组件数据才有监听价格， 防止多次实例化却不使用的问题
        const initEflowData = this._bindUpdater()
        this.props = Object.assign(this.props,initEflowData)
     }
      componentWillUnmount(){
         super.componentWillUnmount()
        this._off();
      }

      /*
       * 绑定相关组件的更新
       * */
      _bindUpdater(){
        let self= this,
          event = this.eflowEvent = {},
          store,
          state = this._eflowstate;
        if(updaters && updaters.length){
          let isMethod,
            propsKey,
            _eflowKey,
            updater,
            originUpdater;
          //遍历updaters, 处理updater的绑定事件
          for(let i = 0; i < updaters.length; i++){
            updater = updaters[i];
            process.env.NODE_ENV !== 'production'
            && invariant(updater, 'wrapComponent(%s) 方法中, 参数updaters数组的第%s元素为undefined, 该元素的类型必须为方法。', getMethodName(_Component), i + 1);
            if(updater instanceof Store){
              updaters = replaceElement(updaters, i, getPrototypeMethods(updater));
              i--;
              continue;
            }

            isMethod = isFunction(updater);
            originUpdater = updater;
            updater = isMethod ? updater : updater.updater;
            propsKey = isMethod
              ? updater.stateKey
              : originUpdater.propsKey
            || updater.stateKey;
            _eflowKey = updater._eflowKey;
            store = updater.owner;
            let update = getState.bind(this, store, propsKey, updater, customPropsMapping);
            event[_eflowKey] =  callUpdate => {
              const newData = update(true);
               
              // debugger
              // 这种情况时防止数据 this.props.xxx 先被赋予变量在使用
              this.props = Object.assign(this.props,newData)
                // 同一份数据 需要在state中有一份防止 this.props.xxx直接被用在了render模版中
              //变异后xxx  这种情况eflow注入的prop不会像真正组件那样被使用到 需要放入data中
              
              this.setState(newData)
              
            };
            pubSub.sub(_eflowKey, event[_eflowKey], 1);

            //初始化该方法对应的state值
            Object.assign(state, getState.call(this, store, propsKey, updater));
          }
        }
        //最后初始化customPropsMapping
        return execInitStores(this, customPropsMapping);
      }
      /*
       * 卸载相关绑定更新
       * */
      _off(){
        if(updaters && updaters.length){
          let event = this.eflowEvent,
            _eflowKey;
          updaters.forEach(function(updater){
            updater = isFunction(updater) ? updater : updater.updater;
            _eflowKey = updater._eflowKey;
            pubSub.off(_eflowKey, event[_eflowKey]);
          });
          this.eflowEvent = null;
        }
      }

      // _createData(state,props) {
      //   debugger
      //   // const eflowState = this._getProps()
      //   const __props = arguments[1] || this.props || {};

      //   return super._createData(state,Object.assign({},__props ))
      // }
    }

    return DataPool
  }
};

export default wrapComponent;