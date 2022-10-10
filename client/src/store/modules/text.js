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
		['return', 93],
		['runs', 95],
		['felt', 95],
		['short', 96],
		['nice', 96],
		['bought', 98],
		['wearing', 98],
		['usually', 104],
		['design', 105],
		['dress.', 105],
		['beautiful', 106],
		['pretty', 108],
		['waist', 109],
		['retailer', 110],
		['think', 112],
		['thought', 114], ['great', 115], ['large', 116], ['see', 116], ['good', 119], ['cut', 127], ['loved', 130], ['cute', 133], ['sweater', 134], ['quality', 136], ['work', 140], ['back.', 142], ['-', 147], ['going', 148], ['tried', 149], ['made', 164], ['wanted', 172], ['color', 174], ['one', 190], ['shirt', 191], ['back', 193], ['material', 197], ['up', 200], ['looks', 202], ['me.', 204], ['small', 204], ['looked', 213], ['wear', 228], ['love', 299], ['look', 310], ['ordered', 317], ['fabric', 326], ['fit', 339], ['size', 347], ['top', 377], ['dress', 493]]
};

const getters = {
	sentiment: state => state.sentiment,
	ratingOneWords: state => state.ratingOneWords,
	ratingTwoWords: state => state.ratingTwoWords,
	currentSelectedWords: state => state.currentSelectedWords,
};

const actions = {

	changeRatingsValue: ({ commit, getters }, { payload }) => {
		let words = []
		console.log('ACTION')
		console.log(payload)
		if (payload['ratings'] === 1) {
			words = getters.ratingOneWords
		}else if (payload['ratings']  === 2) {
			console.log("HERE")
			words = getters.ratingTwoWords
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