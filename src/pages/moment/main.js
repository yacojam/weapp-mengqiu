import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['pages/moment/mian'],
    navigationBarTitleText: '动态详情'
  }
}
