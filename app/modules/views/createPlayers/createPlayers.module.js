"use strict";

require('./createPlayers.less');

import CreatePlayersConfig from './createPlayers.config';

const appModule = angular.module('createPlayers', []);
appModule.config(CreatePlayersConfig);

export default appModule.name;