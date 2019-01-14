## 测试RN2WX转换特性的项目
配合[taro-rn2wx分支代码](https://github.com/ShiYuanjun-Tim/taro) 做转化测试

> ###  **Prerequest**
安装依赖时node版本不能太高推荐 >8.0 <10.0 /  npm >5.7 <6.0  测试nodev8.15.0 (npm v5.10.0) 可以

#### npm包依赖 
```
npm install babel-preset-env --save-dev
npm install babel-plugin-transform-decorators-legacy --save-dev 

<!-- use npm link to install the followings packages in rn2wx branched  -->
npm link the-path-to-@tarojs/plugin-babel
npm link the-path-to-@tarojs/taro-weapp
npm link the-path-to-@tarojs/taro
```
#### config file
1. config folder with config
2. project.config.json for wx


#### 构建项目
1. taro-transformer-wx 需要tsc编译出lib文件夹
2. taro改动需要build taro-weapp
 
> ###  **Test Point**
#### 特性测试

> ##### **语法**
  - 含有 JSX 的 switch case 语句必须每种情况都用花括号 `{}` 包裹结果
  - 同一个作用域的JSX 变量延时赋值没有意义。详见：https://github.com/NervJS/taro/issues/550
  - 不行使用 for 循环操作 JSX 元素，详情：https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md')
  - 同一个库不可以被 import超过一次 
  - StyleSheet 不要重命名/ 使用StyleSheet创建样式，请保持StyleSheet.create格式

> ##### **样式**
1. 格式  - rn样式写法为主去兼容到wx
  - [x] inline style
  - [x] style array
  - [x] StyleSheet object
  - [x] **不打算支持 css 文件的导入**  

2. 写法兼容

| status |  方面   | rn   | wx   |
|:-------|:---------|:-----|:-----|
| Pending |  flex layout|default flex-direction:column|default flex-direction:row,需要显示添加display:flex 启用flex布局|
| Done | 单位 | 默认不需要单位默认dp|需要补充单位/换算  目前使用了px没做换算|
| Done | StyleSheet 支持| support |  support |
| Pending | flex布局 容器大小 | 不设置大小就找在上层 |  不超出直接容器 |
| Pending | flex:1 | 占满容器 |  无用不会自动占满 需要大小 |

> #####  **组件**

1. 属性传递
    - 方法/回调
      - [x] 事件方法绑定的必须是`arrow function`的形式定义的class的方法，否则this指向错误
      - [ ] 事件通过 wx的 customeEvent的形式触发的，所以父组件传递下去的方法事实上是不会有任何返回的，所以**不可以通过传递方法给子组件使用来使得自组件获取父组件中定义的任何内容，eg. ListView的renderRow的这种用法**
      - [x] 事件handler命名必须 `on`开头
    - 组件
      - [x] 不支持 替代方案是使用*组合组件 5*方式,

    - 数据 Ok
    - 命名问题
      -  `on`开头的方法有特殊待遇，这个属性名被被当作事件触发
        
2. children的使用
    - **请不要对 this.props.children 进行任何操作**
      this.props.children[0] 在 Taro 中都是非法的

    - **不要把 this.props.children 分解为变量再使用**
      你必须显性地把 this.props.children 全部都写完整才能实现它的功能, 不要先xx=this.props 之后用{xx.children}的形式使用

3. `不支持` 纯函数当做组件, 替代：可以使用一般组件写法定义
   **并且JSX元素不能出现在render方法之外的地方**
   
4. 组件的组合
    组件的组合需要遵守 this.props.children 的所有规则。组合这个功能和 this.props.children 一样是通过 slot 实现的，也就是说 this.props.children 的限制对于组件组合也都同样适用。
    所有组合都必须用 `render` 开头，且遵守驼峰式命名法。和我们的事件规范以 on 开头一样，组件组合使用 `render` 开头。
    组合只能传入单个 JSX 元素，不能传入其它任何类型。当你需要进行一些条件判断或复杂逻辑操作的时候，可以使用一个 Block 元素包裹住，然后在 Block 元素的里面填充其它复杂的逻辑。

5. Rn中的组件和wx组件差异  
  有3中方式来实现
  1. 如果rn没有但是wx有 ：推荐 用RN实现wx组件接口 - 以wxapi为主 （button）
  2. 如果rn有 wx没有 ： 需要提供patch保证wx端的不报错/ 或者编译成wx组件（Touchable*）
  3. rn有wx也有但是接口不一样 ： 可以用方法1 以一端接口为主/ 或者用编译方式更改源码

   - 补充RN缺失的Button组件 ,以wx的api为主 GAI:5 把onPress改为bindtap
   - Touchable.* 在编译成View GAI:6
   - Image的source转化为src

> #####  **路由/页面跳转**

> #####  **事件**

> #####  **平台判断**

> #####  **其他兼容wx的点**
1. 微信头bar的配置  =》 this.config



> ##### modification
- style 
1. [x] GAI:1  将react中的Component改成 @tarojs/taro-weapp中的Component
2. [] GAI:2  将react-native的引用删除防止拷贝这些东西到项目中(之后考虑替换自定义库)
3. [x] GAI:3   style支持RN中array的写法
               添加单位目前是px单位可修改
              flexDirection检测添加display:flex做兼容
4. [x] GAI:4 StyleSheet.create 被删除以保留纯粹的object作为样式

- componet
1. GAI:5  检测 Text/Button的onPress方法 ，转化成bindtap
2. GAI:6 import的rn组件中一部分需要替换掉比如Touchable.* 全部用view替换, 并且修改onPresss到bindtap
3. GAI:7 图片转换把source转化为src, 转化如下格式
    - {{uri:"xxx}}
    - {obj}
    - {obj.xxx}
    - {require(xxxx)}   本地图片base64编码
4. GAI:8 图片的resizemode转换
5. GAI:9 scrollView的RN到微信转化

TODO: 本地图片都需要做转化， require（）形式都要检测