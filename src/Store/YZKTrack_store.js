
export default{
    state: {
        begindate: null,
        enddate:null,
        fgh:'',
        org:'',
        dataList:[],
        loading:false
    },
    mutations: {
        Yzktrack_updateDate(state, payload) {
            if(!payload){
                state.begindate=undefined;
                state.enddate=undefined;
            }else{
                state.begindate=payload[0];
                state.enddate=payload[1];
            }
        },
        Yzktrack_updateFgh(state,payload){
            state.fgh=payload;
        },
        Yzktrack_updateOrg(state,payload){
            state.org=payload;
        },
        Yzktrack_updatedataList(state,payload){
            state.dataList=payload;
        },
        Yzktrack_updateLoading(state,payload){
            state.loading=payload;
        }
    }
}