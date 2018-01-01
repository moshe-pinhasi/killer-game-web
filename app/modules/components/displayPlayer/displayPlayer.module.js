"use strict";

require('./displayPlayer.less');
import DisplayPlayerComponent from './displayPlayer.component';

const appModule = angular.module('displayPlayer', []);
appModule.component('displayPlayer', DisplayPlayerComponent);

export default appModule.name;