"use strict";

const KillersListGameComponent = {
	template: require('./killersListGame.html'),
	controllerAs: 'killersListGameCtrl',
	controller: function () {},
	bindings: {
		killers: "=",
		onRemove: "&"
	}
};

export default KillersListGameComponent;