import { createStore } from 'vuex'
import utils from '../utils'
const store = createStore({
    state: {
        userInfo: {}
    },
    mutations: {
        SET_USER_INFO (state, name) {
            state.userInfo = name
            utils.setLocal('userInfo', name)
        }
    },
    actions: {
        asyncGetUserInfo ({ commit }) {
        setTimeout(() => {
            commit("getUserInfo", +new Date() + 'action')
        },2000)
        }
    },
    getters: {
        userInfo (state) {
            return state.userInfo ? utils.getLocal('userInfo') : state.userInfo
        }
    }
})

export default store