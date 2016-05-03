"use strict";

require('./addKillerForm.less');

const appModule = angular.module('addKillerForm', []);

AddKillerFormController.$inject = ['KillersService'];
function AddKillerFormController(KillersService) {

	this.sendMessage = () => {
		KillersService.addKiller(this.name);
		this.name = null;
	};
}

appModule.component('addKillerForm', {
	controllerAs: 'addKillerFormCtrl',
	controller: AddKillerFormController,
	template: require('./addKillerForm.html')
});

module.exports = appModule.name;