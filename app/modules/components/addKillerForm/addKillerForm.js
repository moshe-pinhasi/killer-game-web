"use strict";

require('./addKillerForm.less');
const _ = require('lodash');

const appModule = angular.module('addKillerForm', []);

AddKillerFormController.$inject = ['KillersService'];
function AddKillerFormController(KillersService) {

	console.log(KillersService.getKillers());

	this.sendMessage = () => {
		KillersService.addKiller({name: this.name, uuid: _.random(1000000).toString()});

		this.name = null;
		console.log(KillersService.getKillers());
	};
}

appModule.component('addKillerForm', {
	controllerAs: 'addKillerFormCtrl',
	controller: AddKillerFormController,
	template: require('./addKillerForm.html')
});

module.exports = appModule.name;