"use strict";

require('./startGame.less');

const _ = require('lodash');

const appModule = angular.module('startGame', []);

StartGameController.$inject = ['KillersService', 'GameService', '$timeout'];
function StartGameController(KillersService, GameService, $timeout) {

	this.killers = _.shuffle(angular.copy(KillersService.getKillers()));

	// getting the player who kill
	const getKiller = (uuid) => this.killers.filter (player => player.person.uuid === uuid)[0];
	const getDiedPlayer = (uuid) => this.killers.filter (player => player.uuid === uuid)[0];

	this.onRemove = (uuid) => { // uuid - the died player
		this.killer = getKiller(uuid); // player here hit the killer
		const diedPlayer = getDiedPlayer(uuid);

		this.killer.person = diedPlayer.person; // replace the win player aim with the died player aim
		$timeout(() => {
			this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player fro list
			this.killer = null;
		}, 5000);
	};
}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('startGame', {
				url: '/startGame',
				template: require('./startGame.html'),
				controller: StartGameController,
				controllerAs: 'startGameCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;