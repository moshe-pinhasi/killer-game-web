"use strict";

require('./killersBoard.less');

const appModule = angular.module('killersBoard', []);

KillersBoardController.$inject = [];
function KillersBoardController() {


}

appModule.component('killersBoard', {
	controllerAs: 'killersBoardCtrl',
	controller: KillersBoardController,
	template: require('./killersBoard.html'),
	transclude: {
		boardHeader: "boardHeader",
		boardBody: "boardBody",
		boardActions: "?boardActions"
	}
});


module.exports = appModule.name;