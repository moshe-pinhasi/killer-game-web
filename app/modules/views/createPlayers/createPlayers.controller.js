"use strict";

class CreatePlayersController {

	constructor(killersService) {
		'ngInject';

		Object.assign(this, {
			_killersService: killersService,
			killers: killersService.getKillers()
		});
	}

	onRemove(uuid){
		this._killersService.removeKiller(uuid);
	}
}

export default CreatePlayersController;