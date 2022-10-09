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
		['material', 105], 
		['shirt', 105], 
		['one', 113], 
		['wear', 114], 
		['looked', 115], 
		['look', 127], 
		['size', 131], 
		['looks', 142], 
		['ordered', 144], 
		['fit', 153], 
		['top', 175], 
		['fabric', 178], 
		['dress', 248]
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