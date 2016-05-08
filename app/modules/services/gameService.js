'use strict';

const _ = require('lodash');

const appModule = angular.module('GameService', []);

appModule.factory('GameService', [
	function GameServiceFactory() {

		const removed = {};

		const getOptions = (killers, killer) => killers.filter(k => k.uuid !== killer.uuid && !removed[k.uuid]);

		const match = (killers) => {

			let k = _.shuffle(angular.copy(killers));

			k[k.length-1].person = k[0];
			let i;
			for (i = 0; i < k.length-1; i++) {
				k[i].person = k[i+1];
			}

			this.killersIndexes = _.keyBy(k, 'uuid');

			return _.shuffle(k);
		};

		// The public API interface
		return {
			match
		};

	}]);

module.exports = appModule.name;