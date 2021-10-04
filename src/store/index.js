import Vue from 'vue'
import Vuex from 'vuex'

// modules
import user from "./modules/user.js"
import contacts from "./modules/contacts.js"
import popup from "./modules/popup.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        contacts,
        popup
    }
})
