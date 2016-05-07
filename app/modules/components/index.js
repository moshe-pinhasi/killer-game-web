"use strict";

module.exports = angular.module('components', [
	require('./userAvatar/userAvatar'),
	require('./killer/killer'),
	require('./killersList/killersList'),
	require('./addKillerForm/addKillerForm'),
	require('./killersBoard/killersBoard'),
	require('./playersPresentation/playersPresentation')
]);