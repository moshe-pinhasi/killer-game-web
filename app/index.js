"use strict";

window.angular = require('angular');
require('./styles/globals.less');
require('./styles/general.less');
require('./styles/btns.less');

import inject from 'ng-inject';

angular.module('appEntry', [
	require('angular-ui-router'),
	require('angular-animate'),
	require('./modules').name
]);
