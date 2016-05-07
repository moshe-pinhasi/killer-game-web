'use strict';

const _ = require('lodash');

const appModule = angular.module('GameService', []);

appModule.factory('GameService', [
	function GameServiceFactory() {

		const removed = {};

		const getOptions = (killers, killer) => killers.filter(k => k.uuid !== killer.uuid && !removed[k.uuid]);

		const match = (killers) => {
			const k = angular.copy(killers);
			k.forEach(killer => {
				const options = getOptions(killers, killer);
				const selected = _.random(options.length-1);
				killer.person = options[selected];
				removed[killer.person.uuid] = killer.person;
				//console.log(killer.name, "need to kill ", killer.person.name, "with the word:", killer.person.word);
			});

			this.killersIndexes = _.keyBy(killers, 'uuid');

			return k;
		};

		// The public API interface
		return {
			match
		};

	}]);

module.exports = appModule.name;