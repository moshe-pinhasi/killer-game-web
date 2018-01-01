"use strict";

const KillersBoardComponent = {
	controllerAs: 'killersBoardCtrl',
	controller: function () {},
	template: require('./killersBoard.html'),
	transclude: {
		boardHeader: "boardHeader",
		boardBody: "boardBody",
		boardActions: "?boardActions"
	}
};

export default KillersBoardComponent;