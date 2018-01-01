"use strict";

require('./killersBoard.less');
import KillersBoardComponent from './killersBoard.component';

const appModule = angular.module('killersBoard', []);
appModule.component('killersBoard', KillersBoardComponent);

export default appModule.name;