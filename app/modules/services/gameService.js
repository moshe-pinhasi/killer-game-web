'use strict';

const _ = require('lodash');

const appModule = angular.module('GameService', []);

appModule.factory('GameService', () => {

		const match = (killers) => {

			let k = _.shuffle(killers);

			k[k.length-1].person = k[0];
			let i;
			for (i = 0; i < k.length-1; i++) {
				k[i].person = k[i+1];
			}

			return _.shuffle(k);
		};

		// The public API interface
		return {
			match
		};

	});

module.exports = appModule.name;