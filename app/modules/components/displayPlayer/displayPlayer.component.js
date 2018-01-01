"use strict";

import DisplayPlayerController	from './displayPlayer.controller';

const DisplayPlayerComponent = {
	controllerAs: 'displayPlayerCtrl',
	controller: DisplayPlayerController,
	template: require('./displayPlayer.html'),
	bindings: {
		player: "<",
		showDetailsAuto: "<?"
	}
};

export default DisplayPlayerComponent;