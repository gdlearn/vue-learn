import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SIGNIN](state, user) {
            console.log('sign_in2')
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [USER_SIGNOUT](state) {
            console.log('sign_out2')
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    }, 
    actions: {
        [USER_SIGNIN]({commit}, user) {
            console.log('commit_sign_in')
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            console.log('commit_sign_out')
            commit(USER_SIGNOUT)
        }
    }
}