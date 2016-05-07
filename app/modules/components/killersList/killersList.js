"use strict";

require('./killersList.less');

const appModule = angular.module('killersList', []);

KillersListController.$inject = ['KillersService'];
function KillersListController(KillersService) {

	this.killers = KillersService.getKillers();
	this.removeKiller = (uuid) => KillersService.removeKiller(uuid);
}

appModule.component('killersList', {
		template: require('./killersList.html'),
		controllerAs: 'killersListCtrl',
		controller: KillersListController
});

module.exports = appModule.name;