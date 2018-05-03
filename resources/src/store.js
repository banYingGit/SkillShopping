import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    flag: 'false'
  },
  getters: {
  },
  mutations: {
    'UPDATE_ANIMATE_mutation': function (state, payload) {
      state.flag = payload
    }
  },
  actions: {
    'UPDATE_ANIMATE': function (store, payload) {
      store.commit('UPDATE_ANIMATE_mutation', payload)
    }
  }
})

export default store;
