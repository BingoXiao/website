import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 模态框
    modalIndex: 1,
    tempsModalVisible: false,
    // 出品查看图片
    tempsArr: [],
    // 图片描述
    tempsIntro: null
  },
  mutations: {
    INDEX(state, status) {
      state.modalIndex = status;
    },
    VISIBLE(state, status) {
      state.tempsModalVisible = status;
    },
    TEMP_ARR(state, status) {
      state.tempsArr = status;
    },
    TEMP_INTRO(state, status) {
      state.tempsIntro = status;
    }
  }
});

export default store;


