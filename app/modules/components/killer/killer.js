"use strict";

require('./killer.less');


const appModule = angular.module('killer', []);

KillerController.$inject = [];
function KillerController() {

}

appModule.component('killer', {
	bindings: {
		uuid: "@",
		name: "@"
	},
	controllerAs: 'killerCtrl',
	controller: KillerController,
	template: require('./killer.html')
});

module.exports = appModule.name;