'use strict';

const appModule = angular.module('facebookServices', []);
var login = require("facebook-chat-api");

console.log(login);

appModule.factory('FacebookServices', [
	function FacebookServiceFactory() {



		// The public API interface
		return {

		};

	}]);

module.exports = appModule.name;