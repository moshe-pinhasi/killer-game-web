"use strict";

require('./playersPresentions.less');

import PlayersPresentionsConfig from './playersPresentions.config';

const appModule = angular.module('playersPresentions', []);
appModule.config(PlayersPresentionsConfig);

export default appModule.name;