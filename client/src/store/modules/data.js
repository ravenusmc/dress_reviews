import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	tableData: [],
	firstValue: 0,
	lastValue: 20,
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
	tableData: state => state.tableData,
	firstValue: state => state.firstValue,
	lastValue: state => state.lastValue,
	divisionNames: state => state.divisionNames,
	divisionName: state => state.divisionName,
	departmentNames: state => state.departmentNames,
	departmentName: state => state.departmentName,
};

const actions = {

	fetchInitialTableData: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/fetch_initial_table';
		axios.post(path, payload)
			.then((res) => {
				commit('setTableData', res.data)
			})
	},

	changeDataBasedOnSingleSelection: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/fetch_based_on_Single_Selection';
		axios.post(path, payload)
			.then((res) => {
				// res.data.sort((a, b) => b[1] - a[1]);
				commit('setTableData', res.data)
			})
	},

};

const mutations = {

	setTableData(state, data) {
		state.tableData = data
	},

	setDivisionName(state, data) {
		state.selectedDivisionName = data
	},

	setFirstValue(state, data) {
		state.firstValue = data
	},

	setLastValue(state, data) {
		state.lastValue = data
	},

};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};