import Vue from 'vue';
import Vuex from 'vuex';


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
	ratingOneWords: [
		['Word', 'Count'], 
		['small', 96], 
		['looked', 115], 
		['fabric', 178], 
		['ordered', 144], 
		['size', 131], 
		['dress', 248], 
		['material', 105], 
		['one', 113], 
		['top', 175], 
		['wear', 114], 
		['fit', 153], 
		['looks', 142], 
		['shirt', 105], 
		['look', 127]
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