"use strict";

require('./killersList.less');

import KillersListComponent from './killersList.component';

const appModule = angular.module('killersList', []);
appModule.component('killersList', KillersListComponent);

export default appModule.name;