'use strict';


const appModule = angular.module('KillersService', []);

appModule.factory('KillersService', [
	function KillersServiceFactory() {

		this.killers = [];

		const getKillers = () => this.killers;
		const addKiller = (killer) => this.killers.push(killer);

		// The public API interface
		return {
			getKillers,
			addKiller
		}

	}]);

module.exports = appModule.name;