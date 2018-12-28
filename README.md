## 测试RN2WX转换特性的项目
配合[taro-rn2wx分支代码](https://github.com/ShiYuanjun-Tim/taro) 做转化测试

> ###  **Prerequest**
#### npm包依赖 
```
npm install babel-preset-env --save-dev
npm install babel-plugin-transform-decorators-legacy --save-dev 
npm i @tarojs/plugin-babel
npm i @tarojs/taro-weapp
```
#### config file
1. config folder with config
2. project.config.json for wx


#### 构建项目
1. taro-transformer-wx 需要tsc编译出lib文件夹
2. 

> ###  **Test Point**
#### 特性测试

> ##### **语法**
  - 含有 JSX 的 switch case 语句必须每种情况都用花括号 `{}` 包裹结果
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
    - 事件
      - 事件方法绑定的必须是`arrow function`的形式定义的class的方法，否则this指向错误
    - 组件
    - 数据
    - 命名问题
      -  `on`开头的方法有特殊待遇
        
2. children的使用
   
3. Rn中的组件和wx组件

4. `不支持` 纯函数当做组件
   
5. 组件差异

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
