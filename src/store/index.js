import Vue from 'vue'
import Vuex from 'vuex'

import cognitoConfig from '../config/cognito'
import CognitoAuth from '../auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cognito: new CognitoAuth(cognitoConfig)
  }
})
