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
	division_names: [
		'General', 'General Petite', 'Initmates'
	]
};

const getters = {
	firstGraphDataSetInitial: state => state.firstGraphDataSetInitial,
	division_names: state => state.division_names,
};

const actions = {

	changeSelectionBasedOnDivisionName: ({ commit }, { payload }) => {
		console.log(payload)
		// const path = 'http://localhost:5000/fetch_north_south_by_year';
		// axios.post(path, payload)
		// 	.then((res) => {
		// 		res.data.sort((a, b) => b[1] - a[1]);
		// 		commit('setFirstGraphDataSetInitial', res.data)
		// 	})
	},

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