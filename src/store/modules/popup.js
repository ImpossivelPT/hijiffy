export default {
    state: {
        showPopup: false,
        popupObj: {
            title: null,
            bodyComponent: null
        }
    },
    getters: {
        getShowPopup: state => state.showPopup,
        getPopupObj: state => state.popupObj
    },
    actions: {
        openPopup({commit}, popupObj){
            commit('SET_POPUPOBJ', popupObj)
            commit('SHOW_POPUP')
        },
        closePopup({commit}){
            commit('HIDE_POPUP')
        },
    },
    mutations: {
        SHOW_POPUP (state) {
            state.showPopup = true
        },
        HIDE_POPUP (state) {
            state.showPopup = false
        },
        SET_POPUPOBJ (state, popupObj) {
            state.popupObj = popupObj
        }
    },
}
