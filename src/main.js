import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ffe955',
      navigationBarTitleText: '萌球社区',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/main',
        iconPath: 'imgs/icon_home_nor@2x.png',
        selectedIconPath: 'imgs/icon_home_sel@2x.png',
        text: '萌球社区'
      }, {
        pagePath: 'pages/index/main',
        iconPath: 'imgs/icon_send@2x.png',
        selectedIconPath: 'imgs/icon_send@2x.png'
      }, {
        pagePath: 'pages/index/main',
        iconPath: 'imgs/icon_user_nor@2x.png',
        selectedIconPath: 'imgs/icon_user_sel@2x.png',
        text: '铲屎官'
      }],
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      color: '#333333'
    }
  }
}
