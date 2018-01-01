"use strict";

require('./killersListGame.less');

import KillersListGameComponent from './killersListGame.component';

const appModule = angular.module('killersListGame', []);
appModule.component('killersListGame', KillersListGameComponent);

export default appModule.name;