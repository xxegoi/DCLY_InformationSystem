export default{
    state:{
        user:''
    },
    mutations: {
        updateLoginUser(state, payload) {
            state.user = payload;
        }
    }
}