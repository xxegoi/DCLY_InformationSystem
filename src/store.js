import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import login_store from './Store/Login_store'
import yzktrack from './Store/YZKTrack_store'
import yzklist from './Store/YzkList_store'
import gylcManage from './Store/GylcManage_store';

export default new Vuex.Store({
    modules:{
        Login:login_store,
        YzkTrack:yzktrack,
        YzkList:yzklist,
        GylcManage:gylcManage
    }
})

