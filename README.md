## 测试RN2WX转换特性的项目
配合[taro-rn2wx分支代码](https://github.com/ShiYuanjun-Tim/taro) 做转化测试

> ###  **Prerequest**
安装依赖时node版本不能太高推荐 >8.0 && <10.0 /  npm >5.7 && <6.0  测试nodev8.15.0 (npm v5.10.0) 可以
babel版本使用 6.X 不要使用7

#### npm包依赖 
```
npm install babel-preset-env --save-dev
npm install babel-plugin-transform-decorators-legacy --save-dev 

<!-- use npm link to install the followings packages in rn2wx branched  -->
npm link path/to/the/module

npm link /Users/syj/WS/rn2wx/packages/taro
npm link /Users/syj/WS/rn2wx/packages/rnapiPatch4wx
npm link /Users/syj/WS/rn2wx/packages/taro-weapp
npm link /Users/syj/WS/rn2wx/packages/taro-plugin-babel
```
#### 配置文件
1. 根目录下的config文件夹 需要taro的配置，用于配置代码转译行为：
   - 配置项目编译时候需要替换的常量defineConstants和环境变量env
   - 定义本地模块别名alias 类似webpack的alias和tsconfig中的paths属性
   - 需要额外拷贝的文件（拷贝到微信的编译目的目录中）
2. project.config.json 微信使用的配置定义源码根目录文件夹等


#### 代码改动后的构建项目
1. taro-transformer-wx 需要tsc编译出lib文件夹
2. taro 和 taro-weapp 改动需都要重新build 建议根目录下运行 npm run tarochange
####  lib改动
1 eflow 所有的window.Set/Map 之类的对象需要删除掉window
2  6.X 版本的  babel-traverse/lib/scope/renamer.rename() line91 方法中
```javascript
    var parentDeclar = path.find(function (path) {
      return path.isDeclaration() || path.isFunctionExpression()||  path.isClassExpression();
    });
    if (parentDeclar) {
      const bindingIds = parentDeclar.getOuterBindingIdentifiers();

      if (bindingIds[oldName] === binding.identifier) {
         this.maybeConvertFromExportDeclaration(parentDeclar);
      }
    }
```

#### 主要改动的项目有
packages/taro
packages/taro-cli
packages/rnapiPatch4wx  【新】集中存放rn转译译wx用的补丁
packages/taro-transformer-wx


> ###  **Test Point**
#### 特性测试

> ##### **语法**
  - 含有 JSX 的 switch case 语句必须每种情况都用花括号 `{}` 包裹结果
  - 同一个作用域的JSX 变量延时赋值没有意义。详见：https://github.com/NervJS/taro/issues/550
  - 不行使用 for 循环操作 JSX 元素，详情：https://github.com/NervJS/taro/blob/master/packages/eslint-plugin-taro/docs/manipulate-jsx-as-array.md')
  - 同一个库不可以被 import超过一次 
  - StyleSheet 不要重命名/ 使用StyleSheet创建样式，请保持StyleSheet.create格式
  - flex布局的容器需要添加flexContainer属性标明方便转码打补丁

> ##### **样式**
1. 格式  - rn样式写法为主去兼容到wx
  - [x] inline style
  - [x] style array
  - [x] StyleSheet object
  - [x] **不打算支持 css 文件的导入**  

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
    - **配置为页面的组件其参数无法通过标签上的属性来传递 只能url或者数据管理类**
    - >  疑难排查
      - 为什么无法属性传递下去 组件中拿不到
        1. 属性名字是否是on开头了 类似 onestr 之类的
        2. 改组件是不是事实上是一个页面（配置在App的config.pages中）



2. children的使用
    - **请不要对 this.props.children 进行任何操作**
      this.props.children[0] 在 Taro 中都是非法的

    - **不要把 this.props.children 分解为变量再使用**
      你必须显性地把 this.props.children 全部都写完整才能实现它的功能, 不要先xx=this.props 之后用{xx.children}的形式使用

3. `不支持` 纯函数当做组件, 替代：可以使用一般组件写法定义
    
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


> ##### 源码改动点 modification

- style 
1. [x] GAI:1  将react中的Component改成 @tarojs/taro-weapp中的Component
2. [] GAI:2  将react-native的引用删除防止拷贝这些东西到项目中(之后考虑替换自定义库)
3. [x] GAI:3   style支持RN中array的写法
               添加单位目前是px单位可修改
4. GAI:13 提供全局样式的入口
 
- componet
1. GAI:5  检测所有事件方法（onPress, onScroll等） ，转化成wx相应的事件方法 （bindtap， bindScroll）
2. GAI:6 import的rn组件中一部分需要替换掉比如Touchable.* 全部用view替换, 并且修改onPresss到bindtap
3. GAI:7 图片转换把source转化为src, 转化如下格式
    - {{uri:"xxx}}
    - {obj}
    - {obj.xxx}
    - {require(xxxx)}   本地图片base64编码
4. GAI:8 图片的resizemode转换
5. GAI:9 scrollView的RN到微信转化
6. GAI:10 flex容器添加flexContainer属性， 用于补充wx平台的样式， 该属性会使得样式前面插入样式补丁： { flexDirection: 'column', display: 'flex' }    ,  默认如果样式中出现容器类属性 flexConatinerProps= ['flexDirection', 'justifyContent' , 'alignItems'] 则自动给属性中插入 display: 'flex'
7. GAI:11 scrollview的method scrollTo/scrollToEnd方法的转码实现 ，通过ref的方法注入实现
8. GAI:12 新增模块rnapiPatch4wx 主要提供RN组件在wx端的mock实现，并且在导入组件时的替换
9. GAI:13  嵌套解析npm依赖时指定不需要解析的路径/不可能用到 ，【理想情况该把导入都remove掉】
10. GAI:14 文件解析后后缀, 本地文件也是优先使用带平台的代码: 比如require('./a') 会尝试a.wx.js a.js,不解析 平台文件ios android web
    packages/taro-cli/src/util/index.js 配置文件后缀 use in resolveScriptPath
    exports.JS_EXT = ['.js', '.jsx']
    exports.TS_EXT = ['.ts', '.tsx']
11. GAI:15 eflow wrap的替换
12. GAI:16 jsx方法的支持  采用eject方式/不采用template方式


> ##### RN代码兼容写法
- **flex 布局容器 需要添加flexContainer 属性标志，方便编译代码打补丁**
- **flex布局时候 flex方向所在的大小必须设置 如果是row方向则容器需要width（默认100%） 如果方向是column则容器需要height**
- **只有flex容器（wx需要用flexContainer标记）中的flex属性才能如预期效果，flex容器外的独立flex使用可能在rn可行wx不可行**
- 含有绝对定位元素的的容器本身必须是非static（默认）定位
- 不要使用window这个东西
- 组件属性传递无法使用对象结构写法  类似 <Comp {...someObj}/>
- render尽量不要有多出口 最好先把null提前处理不要把返回的逻辑包在条件中
- RN导入的模块不要用as改名


TODO:

  ListView的转化
  onLayout 事件
  Animated
  JSX 成员表达式
  icon
  
