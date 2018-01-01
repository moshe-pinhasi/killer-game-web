"use strict";

class DisplayPlayerController {

	constructor($timeout, $scope) {
		'ngInject';

		Object.assign(this, {
			_$timeout: $timeout, 
			_$scope: $scope,
			display: () => this._display(),
			showMore: () => this._showMore(),
			show: false
		});

		const watcher = $scope.$watch('displayPlayerCtrl.player', this.display);
		$scope.$on('$destroy', watcher);

		this.display();
	}

	$onInit() {
		if (this.showDetailsAuto) {
			this._$timeout(this.showMore, 1500);
		}
	}

	_showMore() {
		this.moreDetails = true;
	}

	_display() {
		this.show = false;
		this.moreDetails = false;
		this._$timeout(() => this.show = true, 500);
	}
}

export default DisplayPlayerController;