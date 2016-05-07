"use strict";

require('./playersPresentions.less');

const appModule = angular.module('playersPresentions', []);

PlayersPresentionsController.$inject = ['KillersService'];
function PlayersPresentionsController(KillersService) {

	this.killers = KillersService.getKillers();
	this.next = () => console.log("next");
	this.next = () => console.log("back");
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('playersPresentions', {
				url: '/playersPresentions',
				template: require('./playersPresentions.html'),
				controller: PlayersPresentionsController,
				controllerAs: 'playersPresentionsCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;