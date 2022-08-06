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
	tableData: [],
	divisionNames: [
		'General', 'General Petite', 'Initmates'
	],
	divisionName: '',
	departmentNames: [
		'Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend'
	],
	departmentName: '',
};

const getters = {
	firstGraphDataSetInitial: state => state.firstGraphDataSetInitial,
	tableData: state => state.tableData,
	divisionNames: state => state.divisionNames,
	divisionName: state => state.divisionName,
	departmentNames: state => state.departmentNames,
	departmentName: state => state.departmentName,
};

const actions = {

	fetchInitialTableData: ({ commit }, { payload }) => {
		console.log('HERE Action')
		const path = 'http://localhost:5000/fetch_initial_table';
		axios.get(path)
			.then((res) => {
				console.log(res.data)
				commit('setTableData', res.data)
			})
	},

	changeSelectionBasedOnDivisionName: ({ commit }, { payload }) => {
		commit('setDivisionName', payload.division_name)
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

	setTableData(state, data) {
		state.tableData = data
	},

	setDivisionName(state, data) {
		state.selectedDivisionName = data
	},

};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};