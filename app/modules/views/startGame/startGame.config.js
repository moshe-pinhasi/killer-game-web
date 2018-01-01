"use strict";

import StartGameController from './startGame.controller';

function StartGameConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('startGame', {
		url: '/startGame',
		template: require('./startGame.html'),
		controller: StartGameController,
		controllerAs: 'startGameCtrl'
	});

	$urlRouterProvider.otherwise('/');	
}

export default StartGameConfig;