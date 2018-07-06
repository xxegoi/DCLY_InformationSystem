
export default{
    state: {
        loading: false
    },
    mutations: {
        TestData_updateloading(state, payload) {
            state.loading = payload;
        }
    }
};