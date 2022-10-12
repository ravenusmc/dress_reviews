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
	currentSelectedWords: [],
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
	ratingTwoWords: [
		['Word', 'Count'],
		['up', 200],
		['looks', 202],
		['me.', 204],
		['small', 204],
		['looked', 213],
		['wear', 228],
		['love', 299],
		['look', 310],
		['ordered', 317],
		['fabric', 326],
		['fit', 339],
		['size', 347],
		['top', 377],
		['dress', 493]
	],
	ratingThreeWords: [
		['Word', 'Count'],
		['little', 346],
		['up', 394],
		['color', 401],
		['small', 405],
		['me.', 427],
		['wear', 477],
		['ordered', 510],
		['look', 549],
		['fabric', 594],
		['love', 637],
		['size', 733],
		['top', 734],
		['fit', 758],
		['dress', 968]
	],
	ratingFourWords: [],
	ratingFiveWords: [],
};

const getters = {
	sentiment: state => state.sentiment,
	ratingOneWords: state => state.ratingOneWords,
	ratingTwoWords: state => state.ratingTwoWords,
	ratingThreeWords: state => state.ratingThreeWords,
	ratingFourWords: state => state.ratingFourWords,
	ratingFiveWords: state => state.ratingFiveWords,
	currentSelectedWords: state => state.currentSelectedWords,
};

const actions = {

	changeRatingsValue: ({ commit, getters }, { payload }) => {
		let words = []
		if (payload['ratings'] === 1) {
			words = getters.ratingOneWords
		} else if (payload['ratings'] === 2) {
			words = getters.ratingTwoWords
		} else if (payload['ratings'] === 3) {
			words = getters.ratingThreeWords
		} else if (payload['ratings'] === 4) {
			words = getters.ratingFourWords
		} else if (payload['ratings'] === 5) {
			words = getters.ratingFiveWords
		}
		commit('setGraphRatingsValue', words)
	},

};


const mutations = {

	setGraphRatingsValue(state, data) {
		state.currentSelectedWords = data
	},

}



export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};