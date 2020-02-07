import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconSrc: [
      require("@/assets/img/icon/time.svg"), 
      require("@/assets/img/icon/like.svg"),
      require("@/assets/img/icon/collecte.svg"),
      require("@/assets/img/icon/comment.svg")
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
