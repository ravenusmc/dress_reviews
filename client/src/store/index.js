import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data';
import text from './modules/text';
import common from './modules/common';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    data,
    text,
    common,
  },
});
