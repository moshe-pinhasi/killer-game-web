"use strict";

require('./playersPresentation.less');

const appModule = angular.module('playersPresentation', []);

PlayersPresentationController.$inject = ['KillersService'];
function PlayersPresentationController(KillersService) {

	this.killers = KillersService.getKillers();
	this.removeKiller = (uuid) => KillersService.removeKiller(uuid);
}

appModule.component('playersPresentation', {
		template: require('./playersPresentation.html'),
		controllerAs: 'playersPresentationCtrl',
		controller: PlayersPresentationController
});

module.exports = appModule.name;