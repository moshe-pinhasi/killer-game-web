"use strict";

import HomepageController from './homepage.controller';

function HomepageConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';
	
	$stateProvider.state('homepage', {
		url: '/',
		template: require('./homepage.html'),
		controller: HomepageController,
		controllerAs: 'homepageCtrl'
	});

	$urlRouterProvider.otherwise('/');
}

export default HomepageConfig;