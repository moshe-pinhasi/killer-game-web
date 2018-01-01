"use strict";

require('./startGame.less');

import StartGameConfig from './startGame.config';

const appModule = angular.module('startGame', []);
appModule.config(StartGameConfig);

export default appModule.name;