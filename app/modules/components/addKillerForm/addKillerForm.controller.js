"use strict";

class AddKillerFormController {

	constructor(killersService) {
		'ngInject';

		Object.assign(this, {
			_killersService: killersService,
			name: null
		});

	}

	isEmpty(value) {
		return angular.isUndefined(value) || value === null || value.length === 0;
	}

	sendMessage() {
		if (this.isEmpty(this.name)) {
			this.showInput = false;
			return;
		}

		this._killersService.addKiller(this.name);
		this.name = null;
	}
}



export default AddKillerFormController;