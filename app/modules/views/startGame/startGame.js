"use strict";

require('./startGame.less');

const _ = require('lodash');

const appModule = angular.module('startGame', []);

StartGameController.$inject = ['KillersService', '$timeout', '$state'];
function StartGameController(KillersService, $timeout, $state) {

	const currKillers = KillersService.getKillers();
	if (!currKillers || currKillers.length === 0) {
		$state.go('homepage',{}, {location: 'replace'});
		return;
	}

	this.killers = _.shuffle(angular.copy(currKillers));

	// getting the player who kill
	const getKiller = (uuid) => this.killers.filter (player => player.person.uuid === uuid)[0];
	const getDiedPlayer = (uuid) => this.killers.filter (player => player.uuid === uuid)[0];

	this.onRemove = (uuid) => { // uuid - the died player
		this.killer = getKiller(uuid); // player here hit the killer
		const diedPlayer = getDiedPlayer(uuid);

		this.killer.person = diedPlayer.person; // replace the win player aim with the died player aim

		if (this.killers.length === 2) {
			this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player from list
			KillersService.setKillers(this.killers);
			this.winner = this.killers[0].name;
			return;
		}

		$timeout(() => {
			this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player fro list
			this.killer = null;
			KillersService.setKillers(this.killers);
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