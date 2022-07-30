import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	firstGraphDataSetInitial: [
		['Side', 'Count'],
		['South', 1722],
		['Not Applicable', 377],
		['North', 43],
	],
};

const getters = {
	firstGraphDataSetInitial: state => state.firstGraphDataSetInitial,
};

const actions = {
};

const mutations = {
};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};