"use strict";

import CreatePlayersController from './createPlayers.controller';

function CreatePlayersConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('createPlayers', {
		url: '/createPlayers',
		template: require('./createPlayers.html'),
		controller: CreatePlayersController,
		controllerAs: 'createPlayersCtrl'
	});

	$urlRouterProvider.otherwise('/');
	
}

export default CreatePlayersConfig;