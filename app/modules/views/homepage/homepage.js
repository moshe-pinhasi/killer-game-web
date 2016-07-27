"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

HomepageController.$inject = ['$state', 'KillersService'];
function HomepageController($state, KillersService) {

	this.createNewGame = () => {
		KillersService.createNewKillers();
		$state.go('createPlayers',{}, {location: 'replace'});
	};
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('homepage', {
				url: '/',
				template: require('./homepage.html'),
				controller: HomepageController,
				controllerAs: 'homepageCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;