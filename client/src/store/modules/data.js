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
				console.log(res.data)
				if (res.data[0][0].length == 0){
					commit('setDivisionName', res.data[2])
					commit('setDepartmentNames', res.data[0][1])
					commit('setDepartmentName', res.data[0][1][0])
					commit('setClassNames', res.data[0][2])
					commit('setClassName', res.data[0][2][0])
				}
				if (res.data[0][1].length == 0){
					commit('setDivisionNames', res.data[0][0])
					commit('setDivisionName', res.data[0][0][0])
					commit('setDepartmentName', res.data[2])
					commit('setClassNames', res.data[0][2])
					commit('setClassName', res.data[0][2][0])
				}
				if (res.data[0][2].length == 0){
					commit('setDivisionNames', res.data[0][0])
					commit('setDivisionName', res.data[0][0][0])
					commit('setDepartmentNames', res.data[0][1])
					commit('setDepartmentName', res.data[0][1][0])
					commit('setClassName', res.data[2])
				}
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