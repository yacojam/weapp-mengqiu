import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '发布动态',
    navigationBarBackgroundColor: '#f1f1fa'
  }
}
