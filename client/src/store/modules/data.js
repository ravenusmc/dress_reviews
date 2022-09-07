import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	tableData: [],
	dataLength: 0,
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
	dataLength: state => state.dataLength,
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
				commit('setTableData', res.data[0])
				commit('setDataLength', res.data[1])
				let originalDivisionNames = ['General', 'General Petite', 'Initmates']
				let originalDepartmentNames = ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']
				let originalClassNames = [
					'Jeans', 'Blouses', 'Skirts', 'Pants', 'Swim', 'Sweaters', 'Knits', 'Fine gauge',
					'Dresses', 'Shorts', 'Jackets', 'Outerwear', 'Lounge', 'Intimates', 'Legwear', 'Trend',
					'Sleep', 'Layering', 'Casual bottoms', 'Chemises'
				]
				commit('setDivisionNames', originalDivisionNames)
				commit('setDivisionName', "General")
				commit('setDepartmentNames', originalDepartmentNames)
				commit('setDepartmentName', "Bottoms")
				commit('setClassNames', originalClassNames)
				commit('setClassName', "Jeans")
			})
	},

	changeDataBasedOnSingleSelection: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/fetch_based_on_Single_Selection';
		axios.post(path, payload)
			.then((res) => {
				console.log(res.data[3])
				if (res.data[0][0].length == 0) {
					commit('setDivisionName', res.data[2])
					commit('setDepartmentNames', res.data[0][1])
					commit('setDepartmentName', res.data[0][1][0])
					commit('setClassNames', res.data[0][2])
					commit('setClassName', res.data[0][2][0])
				}
				if (res.data[0][1].length == 0) {
					commit('setDivisionNames', res.data[0][0])
					commit('setDivisionName', res.data[0][0][0])
					commit('setDepartmentName', res.data[2])
					commit('setClassNames', res.data[0][2])
					commit('setClassName', res.data[0][2][0])
				}
				if (res.data[0][2].length == 0) {
					commit('setDivisionNames', res.data[0][0])
					commit('setDivisionName', res.data[0][0][0])
					commit('setDepartmentNames', res.data[0][1])
					commit('setDepartmentName', res.data[0][1][0])
					commit('setClassName', res.data[2])
				}
				commit('setTableData', res.data[1])
				commit('setDataLength', res.data[3])
			})
	},

	fetchDataBasedOnAge: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/fetch_data_based_on_age';
		axios.post(path, payload)
			.then((res) => {
				commit('setTableData', res.data)
				commit('setDataLength', res.data.length)
				// let originalDivisionNames = ['General', 'General Petite', 'Initmates']
				// let originalDepartmentNames = ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']
				// let originalClassNames = [
				// 	'Jeans', 'Blouses', 'Skirts', 'Pants', 'Swim', 'Sweaters', 'Knits', 'Fine gauge', 
				// 	'Dresses', 'Shorts', 'Jackets', 'Outerwear', 'Lounge', 'Intimates', 'Legwear', 'Trend', 
				// 	'Sleep', 'Layering', 'Casual bottoms', 'Chemises'
				// ]
				// commit('setDivisionNames', originalDivisionNames)
				// commit('setDivisionName', "General")
				// commit('setDepartmentNames', originalDepartmentNames)
				// commit('setDepartmentName', "Bottoms")
				// commit('setClassNames', originalClassNames)
				// commit('setClassName', "Jeans")
			})
	},

	changeDataBasedOnRange: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/get_data_based_off_range_selection';
		axios.post(path, payload)
			.then((res) => {
				commit('setTableData', res.data)
				commit('setDataLength', res.data.length)
				// let originalDivisionNames = ['General', 'General Petite', 'Initmates']
				// let originalDepartmentNames = ['Bottoms', 'Tops', 'Intimate', 'Dresses', 'Jackets', 'Trend']
				// let originalClassNames = [
				// 	'Jeans', 'Blouses', 'Skirts', 'Pants', 'Swim', 'Sweaters', 'Knits', 'Fine gauge', 
				// 	'Dresses', 'Shorts', 'Jackets', 'Outerwear', 'Lounge', 'Intimates', 'Legwear', 'Trend', 
				// 	'Sleep', 'Layering', 'Casual bottoms', 'Chemises'
				// ]
				// commit('setDivisionNames', originalDivisionNames)
				// commit('setDivisionName', "General")
				// commit('setDepartmentNames', originalDepartmentNames)
				// commit('setDepartmentName', "Bottoms")
				// commit('setClassNames', originalClassNames)
				// commit('setClassName', "Jeans")
			})
	}

};

const mutations = {

	setTableData(state, data) {
		state.tableData = data
	},

	setDataLength(state, data) {
		state.dataLength = data
	},

	setDivisionNames(state, data) {
		state.divisionNames = data
	},

	setDivisionName(state, data) {
		state.divisionName = data
	},

	setDepartmentNames(state, data) {
		state.departmentNames = data
	},

	setDepartmentName(state, data) {
		state.departmentName = data
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