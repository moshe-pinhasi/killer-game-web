"use strict";

require('./killersList.less');

const appModule = angular.module('killersList', []);

KillersListController.$inject = [];
function KillersListController() {

}

appModule.component('killersList', {
	template: require('./killersList.html'),
	controllerAs: 'killersListCtrl',
	controller: KillersListController,
	bindings: {
		killers: "=",
		onRemove: "&"
	}
});

module.exports = appModule.name;