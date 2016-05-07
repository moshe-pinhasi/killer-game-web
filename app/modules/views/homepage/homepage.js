"use strict";

require('./homepage.less');

const appModule = angular.module('homepage', []);

//HomepageController.$inject = ['$facebook'];
//function HomepageController($facebook) {

HomepageController.$inject = ['FacebookService'];
function HomepageController(FacebookService) {

	const responseFn = response => console.log(JSON.stringify(response));
	const responseStatusFn = response => console.log(JSON.stringify(response.status));

	this.logout = () => FacebookService.logout(responseStatusFn);

	let authResponse = null;
	//accessToken
	this.login = () =>
		FacebookService.login({scope: 'public_profile,email,user_friends,read_custom_friendlists'}, (response) => {
			console.log(response);

			//authResponse = response.authResponse;
			//FacebookService.friends((response) => {
			//	console.log(JSON.stringify(response));
			//});


			FacebookService.me((response) => {
				FacebookService.sendMessage("this is a test", response.id, responseFn);
			});

			//console.log( FacebookService.friends() );
		});

	FacebookService.getLoginStatus(responseStatusFn);


}

appModule.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('homepage', {
				url: '/',
				template: require('./homepage.html'),
				controller: HomepageController,
				controllerAs: 'homepageCtrl'
			});

		$urlRouterProvider.otherwise('/');
	}]);

module.exports = appModule.name;