"use strict";

require('./killersBoard.less');

const appModule = angular.module('killersBoard', []);

KillersBoardController.$inject = ['KillersService'];
function KillersBoardController(KillersService) {

	this.killers = KillersService.getKillers();
}

appModule.component('killersBoard', {
	controllerAs: 'killersBoardCtrl',
	controller: KillersBoardController,
	template: require('./killersBoard.html')
});


module.exports = appModule.name;