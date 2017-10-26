/**
 * Created by admin on 2017/9/24.
 */
import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    }
}

export default mutations
