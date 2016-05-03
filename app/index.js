"use strict";

window.angular = require('angular');
require('./styles/globals.less');
require('./styles/general.less');
require('./styles/btns.less');

angular.module('appEntry', [
	require('angular-ui-router'),
	require('./modules').name
]);
