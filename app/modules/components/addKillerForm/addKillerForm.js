"use strict";

require('./addKillerForm.less');

const appModule = angular.module('addKillerForm', []);

AddKillerFormController.$inject = ['KillersService'];
function AddKillerFormController(KillersService) {

	const isEmpty = (value) => angular.isUndefined(value) || value === null || value.length === 0;

	this.sendMessage = () => {
		
		console.log(this.name);

		if (isEmpty(this.name)) {
			this.showInput = false;
			return;
		}

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