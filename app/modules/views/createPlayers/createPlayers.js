"use strict";

require('./createPlayers.less');

const appModule = angular.module('createPlayers', []);

CreatePlayersController.$inject = [];
function CreatePlayersController() {


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