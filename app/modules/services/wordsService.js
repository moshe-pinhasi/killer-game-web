'use strict';

const _ = require('lodash');

const appModule = angular.module('WordsService', []);

appModule.factory('WordsService', [
	function WordsServiceFactory() {


		const words = ['computers', 'numbers', 'random', 'cards', 'update'];

		let killersNames = _.shuffle(angular.copy(words));

		const getWord = (index) => killersNames[index];

		// The public API interface
		return {
			getWord
		};

	}]);

module.exports = appModule.name;