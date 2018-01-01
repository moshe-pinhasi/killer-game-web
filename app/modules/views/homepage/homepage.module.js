"use strict";

require('./homepage.less');

import HomepageConfig from './homepage.config';

const appModule = angular.module('homepage', []);
appModule.config(HomepageConfig);

export default appModule.name;