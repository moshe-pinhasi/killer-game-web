'use strict';

const _ = require('lodash');

const appModule = angular.module('WordsService', []);

appModule.factory('WordsService', [
	function WordsServiceFactory() {


		const words = ['Computers', 'Numbers', 'Random', 'Cards',
			'Food', 'Laptop', 'Watermelon', 'T-Shirt', 'Green', 'Categories',
			'Table', 'Coffee', 'Star', 'Sister', 'Cry', 'Shopping', 'School',
			'Taxi', 'Tax', 'Swimming', 'Calendar', 'Hospital', 'Five', 'Ball',
			'Run', 'Cat', 'Dog', 'Fake', 'Robot', 'Black', 'Goodbye', 'Song',
			'Escape', 'Newspaper', 'Future', 'Scream', 'Music', 'Sound', 'Duck',
			'Smock', 'Money', 'Swimming Pool', 'Beer', 'Pizza', 'Vodka', 'Hamburger',
			'King', 'Poker', 'Casino', 'Soccer', 'Children', 'Guitar', 'Flight'];

		let killersNames = _.shuffle(angular.copy(words));

		const getWord = (index) => killersNames[index];

		// The public API interface
		return {
			getWord
		};

	}]);

module.exports = appModule.name;