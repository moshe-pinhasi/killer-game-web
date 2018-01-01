"use strict";

const KillerComponent = {
	controllerAs: 'killerCtrl',
	controller: function () {},
	template: require('./killer.html'),
	bindings: {
		uuid: "@",
		name: "@"
	}
};

export default KillerComponent;