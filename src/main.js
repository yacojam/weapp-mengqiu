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
    pages: [
      '^pages/home/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FFE955',
      navigationBarTitleText: '萌球',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f1f1fa',
      enablePullDownRefresh: true
    },
    tabBar: {
      list: [{
        pagePath: 'pages/home/main',
        text: '首页',
        iconPath: './static/images/navbar/icon_home_nor@3x.png',
        selectedIconPath: './static/images/navbar/icon_home_sel@3x.png'
      }, {
        pagePath: 'pages/nest/main',
        text: '萌窝',
        iconPath: './static/images/navbar/icon_pet_nor@3x.png',
        selectedIconPath: './static/images/navbar/icon_pet_sel@3x.png'
      }, {
        pagePath: 'pages/my/main',
        text: '我的',
        iconPath: './static/images/navbar/icon_user_nor@3x.png',
        selectedIconPath: './static/images/navbar/icon_user_sel@3x.png'
      }],
      selectedColor: '#000000'
    }
  }
}
