'use strict';

const _ = require('lodash');

const appModule = angular.module('facebookService', []);

appModule.provider('facebook', function () {

	this.config = null;

	this.setConfig = (config) => this.config = config;

	this.$get = ['$q', '$window', ($q, $window) => {
		let facebook = $q.defer();
		facebook.config = this.config;

		$window.fbAsyncInit = function() {
			$window.FB.init(facebook.config);
			facebook.resolve($window.FB);
		};

		return facebook;
	}];
});

appModule.config(["facebookProvider", function (facebookProvider) {
	facebookProvider.setConfig({
			appId      : '882196238552174',
			xfbml      : true,
			version    : 'v2.6'
		});
}]);

appModule.run( ['$window', function( $window ) {
	// Load the facebook SDK asynchronously
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}]);

appModule.factory('FacebookService', [ 'facebook',
	function FacebookServiceFactory(facebook) {

		const facebookPromise = facebook.promise;

		const getLoginStatus = (cb) =>
				facebookPromise.then(FB =>
						FB.getLoginStatus(cb));

		const login = (permissions, cb) =>
			facebookPromise.then(FB => FB.login(cb, permissions));

		const logout = (cb) =>
			facebookPromise.then(FB => FB.logout(cb));

		const friends = (cb) =>
			facebookPromise.then(FB =>
				FB.api('/me/friendlists', cb));

		const sendMessage = (message, to, cb) =>
			facebookPromise.then(FB => FB.ui({
				app_id: '882196238552174',
				method: 'send',
				name: "moshe ppp",
				link: 'http://localhost:8082/#/',
				to: to,
				description: message

			}, cb));

		const me = (cb) =>
			facebookPromise.then(FB => FB.api('/me', cb));

		// The public API interface
		return {
			login,
			logout,
			getLoginStatus,
			me,
			friends,
			sendMessage
		};

	}]);

module.exports = appModule.name;