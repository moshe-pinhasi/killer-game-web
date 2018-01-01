"use strict";

const KillersListComponent = {
	controllerAs: 'killersListCtrl',
	controller: function () {},
	template: require('./killersList.html'),
	bindings: {
		killers: "<",
		onRemove: "&"
	}
};

export default KillersListComponent;