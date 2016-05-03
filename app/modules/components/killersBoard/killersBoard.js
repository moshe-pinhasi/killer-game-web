"use strict";

require('./killersBoard.less');

const appModule = angular.module('killersBoard', []);

KillersBoardController.$inject = [];
function KillersBoardController() {


}

appModule.component('killersBoard', {
	controllerAs: 'killersBoardCtrl',
	controller: KillersBoardController,
	template: require('./killersBoard.html')
});


module.exports = appModule.name;