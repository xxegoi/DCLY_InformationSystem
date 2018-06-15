export default{
    state:{
        loading:false
    },
    mutations: {
        GylcManage_updateLoading(state, payload) {
            state.loading = payload;
        }
    }
}