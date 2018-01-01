"use strict";

require('./killer.less');

import KillerComponent from './killer.component';

const appModule = angular.module('killer', []);
appModule.component('killer', KillerComponent);

export default appModule.name;