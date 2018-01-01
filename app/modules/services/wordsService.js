'use strict';

const _ = require('lodash');

class WordsService {

	constructor() {
		const words = ['Computers', 'Numbers', 'Random', 'Cards',
						'Food', 'Laptop', 'Watermelon', 'T-Shirt', 'Green', 'Categories',
						'Table', 'Coffee', 'Star', 'Sister', 'Cry', 'Shopping', 'School',
						'Taxi', 'Tax', 'Swimming', 'Calendar', 'Hospital', 'Five', 'Ball',
						'Run', 'Cat', 'Dog', 'Fake', 'Robot', 'Black', 'Goodbye', 'Song',
						'Escape', 'Newspaper', 'Future', 'Scream', 'Music', 'Sound', 'Duck',
						'Smock', 'Money', 'Swimming Pool', 'Beer', 'Pizza', 'Vodka', 'Hamburger',
						'King', 'Poker', 'Casino', 'Soccer', 'Children', 'Guitar', 'Flight'];

		Object.assign(this, {
			_killersNames: _.shuffle(angular.copy(words))
		});
	}
	
	getWord(index) {
		return this._killersNames[index];
	}
}

export default WordsService;