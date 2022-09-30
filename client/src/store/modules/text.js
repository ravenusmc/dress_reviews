import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	sentiment: [
		['rating', 'Sentiment'], 
		[1, 0.05529], 
		[2, 0.09062], 
		[3, 0.13436],
		[4, 0.19299], 
		[5, 0.2583]
	],
};

const getters = {
	sentiment: state => state.sentiment, 
};



export default {
	namespaced: true,
	state,
	getters,
};