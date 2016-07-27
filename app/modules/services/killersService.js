'use strict';

const _ = require('lodash');
const localStorage = require('store');

const appModule = angular.module('KillersService', []);

appModule.factory('KillersService', ['WordsService',
	function KillersServiceFactory(WordsService) {

		const getKillers = () => this.killers;

		const saveToLocal = () => localStorage.set('killers', this.killers);

		const addKiller = (killer) => {
			this.killers.push({
				name: killer,
				uuid: _.random(1000000).toString(),
				word: WordsService.getWord(this.killers.length+1)
			});

			saveToLocal();
		};

		const removeKiller = (uuid) => {
			_.remove(this.killers, (killer) => killer.uuid === uuid);
			saveToLocal();
		};

		const init = () => {
			const killersRestore = localStorage.get('killers');
			setKillers(killersRestore || []);
		};

		const setKillers = (killers) => {
			this.killers = killers;
			saveToLocal();
		};

		const createNewKillers = () => setKillers([]);

		init();

		//addKiller('moshe');
		//addKiller('yaniv');
		//addKiller('igal');
		//addKiller('yaron');

		// The public API interface
		return {
			getKillers,
			addKiller,
			setKillers,
			removeKiller,
			createNewKillers
		};

	}]);

module.exports = appModule.name;