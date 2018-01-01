"use strict";

import PlayersPresentionsController from './playersPresentions.controller';

function PlayersPresentionsConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('playersPresentions', {
		url: '/playersPresentions',
		template: require('./playersPresentions.html'),
		controller: PlayersPresentionsController,
		controllerAs: 'playersPresentionsCtrl'
	});

	$urlRouterProvider.otherwise('/');
}

export default PlayersPresentionsConfig;