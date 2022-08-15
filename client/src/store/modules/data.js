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
	classNames: [
		'Jeans', 'Blouses', 'Skirts', 'Pants', 'Swim', 'Sweaters', 'Knits', 'Fine gauge', 
		'Dresses', 'Shorts', 'Jackets', 'Outerwear', 'Lounge', 'Intimates', 'Legwear', 'Trend', 
		'Sleep', 'Layering', 'Casual bottoms', 'Chemises'
	],
	className: '',
};

const getters = {
	tableData: state => state.tableData,
	firstValue: state => state.firstValue,
	lastValue: state => state.lastValue,
	divisionNames: state => state.divisionNames,
	divisionName: state => state.divisionName,
	departmentNames: state => state.departmentNames,
	departmentName: state => state.departmentName,
	classNames: state => state.classNames,
	className: state => state.className
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
				if (res.data[0][0].length == 0){
					commit('setDepartmentNames', res.data[0][1])
					commit('setClassNames', res.data[0][2])
					commit('setClassName', res.data[0][2][0])
				}
				// When division is seleted need to change department name and class name 
				commit('setTableData', res.data[1])
			})
	},

};

const mutations = {

	setTableData(state, data) {
		state.tableData = data
	},

	setDivisionNames(state, data) {
		state.divisionNames = data
	},

	setDivisionName(state, data) {
		state.selectedDivisionName = data
	},

	setDepartmentNames(state, data) {
		state.departmentNames = data
	},

	setClassNames(state, data) {
		state.classNames = data
	},

	setClassName(state, data) {
		state.className = data
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