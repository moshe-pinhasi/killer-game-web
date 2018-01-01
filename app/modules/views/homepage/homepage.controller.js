"use strict";

class HomepageController {
	constructor($state, killersService) {
		'ngInject';

		Object.assign(this, {
			_$state: $state,
			_killersService: killersService 
		});

	}

	createNewGame () {
		this._killersService.createNewKillers();
		this._$state.go('createPlayers',{}, {location: 'replace'});
	}
}

export default HomepageController;
