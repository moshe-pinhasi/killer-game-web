"use strict";

require('./addKillerForm.less');
import AddKillerFormComponent from './addKillerForm.component';

const appModule = angular.module('addKillerForm', []);
appModule.component('addKillerForm', AddKillerFormComponent);

export default appModule.name;