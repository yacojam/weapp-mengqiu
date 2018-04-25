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
      navigationBarBackgroundColor: '#FFE955',
      navigationBarTitleText: '萌球社区',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f1f1fa'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/main',
        text: '萌球社区',
        iconPath: './static/imgs/index/icon_home_nor@3x.png',
        selectedIconPath: './static/imgs/index/icon_home_sel@3x.png'
      }, {
        pagePath: 'pages/petNest/main',
        text: '萌窝',
        iconPath: './static/imgs/index/icon_pet_nor@3x.png',
        selectedIconPath: './static/imgs/index/icon_pet_sel@3x.png'
      }, {
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: './static/imgs/index/icon_user_nor@3x.png',
        selectedIconPath: './static/imgs/index/icon_user_sel@3x.png'
      }],
      selectedColor: '#000000'
    }
  }
}
