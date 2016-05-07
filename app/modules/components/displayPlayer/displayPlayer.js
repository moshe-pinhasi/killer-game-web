"use strict";

require('./displayPlayer.less');

const appModule = angular.module('displayPlayer', []);

DisplayPlayerController.$inject = ['$timeout', '$scope'];
function DisplayPlayerController($timeout, $scope) {


	this.showMore = () => this.moreDetails = true;

	const display = () => {
		this.show = false;
		this.moreDetails = false;
		$timeout(() => this.show = true, 1000);
	};

	display();

	const watcher = $scope.$watch('displayPlayerCtrl.player', display);
	$scope.$on('$destroy', watcher);
}

appModule.component('displayPlayer', {
	template: require('./displayPlayer.html'),
	controllerAs: 'displayPlayerCtrl',
	controller: DisplayPlayerController,
	bindings: {
		player: "="
	}
});

module.exports = appModule.name;