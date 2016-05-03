"use strict";

module.exports = angular.module('appModules', [
	require('./services').name,
	require('./components').name,
	require('./views').name
]);