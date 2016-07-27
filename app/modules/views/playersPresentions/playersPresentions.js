"use strict";

require('./playersPresentions.less');

const appModule = angular.module('playersPresentions', []);

PlayersPresentionsController.$inject = ['GameService', 'KillersService', '$state'];
function PlayersPresentionsController(GameService, KillersService, $state) {

	const currKillers = KillersService.getKillers();
	if (!currKillers || currKillers.length === 0) {
		$state.go('homepage',{}, {location: 'replace'});
		return;
	}

	const players = GameService.match(currKillers);

	KillersService.setKillers(players);

	let index = 0;
	this.player = players[0];
	this.finished = false;

	this.next = () => {

		if (this.finished) {
			$state.go('startGame',{}, {location: 'replace'});
		}

		if (index === (players.length-1)) {
			return;
		}

		this.player = players[++index];
		(index === (players.length-1)) && (this.finished = true);
	};

	this.back = () => {
		if (index === 0) {
			return;
		}
		this.finished = false;
		this.player = players[--index];
	};

	this.done = () => console.log("done");


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