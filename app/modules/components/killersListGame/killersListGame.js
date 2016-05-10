"use strict";

require('./killersListGame.less');

const appModule = angular.module('killersListGame', []);

KillersListGameController.$inject = [];
function KillersListGameController() {

}

appModule.component('killersListGame', {
	template: require('./killersListGame.html'),
	controllerAs: 'killersListGameCtrl',
	controller: KillersListGameController,
	bindings: {
		killers: "=",
		onRemove: "&"
	}
});

module.exports = appModule.name;