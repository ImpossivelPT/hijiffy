export default {
    state: {
        currentUser: {
            name: 'Susan',
            photo: require('@/assets/images/user/avatar.jpeg')
        }
    },
    getters: {
        getCurrentUser: state => state.currentUser
    },
    actions: {},
    mutations: {},
}
