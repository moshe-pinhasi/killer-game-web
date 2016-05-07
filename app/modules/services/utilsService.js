'use strict';

const _ = require('lodash');

const appModule = angular.module('UtilsService', []);

appModule.factory('UtilsService', [
	function UtilsServiceFactory() {

		const shuffle = (array) => {
			let i = 0
				, j = 0
				, temp = null;

			for (i = array.length - 1; i > 0; i -= 1) {
				j = _.random(i);
				temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}

			return array;
		};

		// The public API interface
		return {
			shuffle
		};

	}]);

module.exports = appModule.name;