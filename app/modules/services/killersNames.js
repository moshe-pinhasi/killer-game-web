'use strict';


const appModule = angular.module('KillersService', []);

appModule.factory('KillersService', [
	function KillersServiceFactory() {

		this.killersNames = [];

		const getName = () => this.killersNames;

		
		// The public API interface
		return {
			getName
		}

	}]);

module.exports = appModule.name;