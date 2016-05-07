"use strict";

require('./createPlayers.less');

const appModule = angular.module('createPlayers', []);

CreatePlayersController.$inject = ['KillersService'];
function CreatePlayersController(KillersService) {

	this.killers = KillersService.getKillers();
	this.onRemove = (uuid) => KillersService.removeKiller(uuid);
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('createPlayers', {
				url: '/createPlayers',
				template: require('./createPlayers.html'),
				controller: CreatePlayersController,
				controllerAs: 'createPlayersCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;