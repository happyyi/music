/**
 * Created by admin on 2017/9/24.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    mutations,
    state,
    actions,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store

