export default{
    state: {
        currentpage: 1,
        pageSize:20,
        total:0,
        dataList:[],
        loading:false,
        daterange:[],

    },
    mutations: {
        YzkList_updateCurrentPage(state, payload) {
            state.currentpage = payload;
        },
        YzkList_updateTotal(state,payload){
            state.total=payload;
        },
        YzkList_updatepageSize(state,payload){
            state.pageSize=payload;
        },
        YzkList_updatedataList(state,payload){
            state.dataList=payload;
        },
        YzkList_updateLoading(state,payload){
            state.loading=payload;
        },
        YzkList_updatedaterange(state,payload){
            state.daterange=payload;
        }
    }
}