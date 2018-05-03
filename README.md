# 萌球小程序

> MengQiu by Mpvue

## Build Setup

``` bash
# install dependencies
yarn install / yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##代码规范
1. 文件或文件夹名中单词以小写字母书写，短横线“-”连接，如tab-content.vue。
2. vue组件内部组件名采用驼峰命名，如TabContent。使用时，import TabContent from 'tab-content'，便于与原生组件区分，且方便使用时的关联代码查找。
3. 样式名统一采用小写字母+短横线的命名方式。
