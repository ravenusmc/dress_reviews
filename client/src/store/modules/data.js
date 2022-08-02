import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
	],
	selectedDivisionName: '',
	department_names: [
		'Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend'
	], 
	selectedDepartmentName: '',
};

const getters = {
	firstGraphDataSetInitial: state => state.firstGraphDataSetInitial,
	division_names: state => state.division_names,
	selectedDivisionName: state => state.selectedDivisionName, 
	department_names: state => state.department_names, 
	selectedDepartmentName: state => state.selectedDepartmentName,
};

const actions = {

	changeSelectionBasedOnDivisionName: ({ commit }, { payload }) => {
		commit('setSelectedDivisionName', payload.division_name)
		const path = 'http://localhost:5000/fetch_based_on_Division_name';
		axios.post(path, payload)
			.then((res) => {
				// res.data.sort((a, b) => b[1] - a[1]);
				commit('setFirstGraphDataSetInitial', res.data)
			})
	},

};

const mutations = {

	setFirstGraphDataSetInitial(state, data) {
		state.firstGraphDataSetInitial = data
	},

	setSelectedDivisionName(state, data) {
		state.selectedDivisionName = data
	}

};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};