import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
// 创建vuex的store实例
const store = new Vuex.Store({
  state, mutations, actions, getters
})

export default store
