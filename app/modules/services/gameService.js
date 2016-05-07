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
				const selectedIndex = _.random(options.length-1);
				const selected = options[selectedIndex];
				killer.person = selected;
				removed[selected.uuid] = selected;
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