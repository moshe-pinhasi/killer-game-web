'use strict';


const appModule = angular.module('WordsService', []);

appModule.factory('WordsService', [
	function WordsServiceFactory() {


		const words = ['computers', 'numbers', 'random', 'cards', 'update'];


		const shuffle = (array) => {
			let i = 0
				, j = 0
				, temp = null;

			for (i = array.length - 1; i > 0; i -= 1) {
				j = Math.floor(Math.random() * (i + 1));
				temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}

			return array;
		};

		this.killersNames = shuffle(angular.copy(words));

		const getWord = (index) => this.killersNames[index];

		// The public API interface
		return {
			getWord
		};

	}]);

module.exports = appModule.name;