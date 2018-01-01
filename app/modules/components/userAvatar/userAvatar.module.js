"use strict";

require('./userAvatar.less');

import UserAvatarComponent from './userAvatar.component';

const appModule = angular.module('userAvatar', []);
appModule.component('userAvatar', UserAvatarComponent);

export default appModule.name;