import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCart: false
  },
  mutations: {
    setShowCart(state, payload){
      state.showCart= payload
    }
  },
  actions: {
    updateShowCart({commit}, status){
      commit('setShowCart', status);
    }
  },
  modules: {
  }
})
