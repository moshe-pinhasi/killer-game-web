'use strict';

const _ = require('lodash');
const localStorage = require('store');

class KillersService {
	constructor(wordsService) {
		'ngInject';

		Object.assign(this, {
			_wordsService: wordsService,
			killers: []
		});

		this.init();
	}

	getKillers () {
		return this.killers;
	}

	saveToLocal() {
		localStorage.set('killers', this.killers);
	}

	addKiller(killer) {
		this.killers.push({
			name: killer,
			uuid: _.random(1000000).toString(),
			word: this._wordsService.getWord(this.killers.length+1)
		});

		this.saveToLocal();
	}

	removeKiller(uuid) {
		_.remove(this.killers, (killer) => killer.uuid === uuid);
		this.saveToLocal();
	}

	init() {
		const killersRestore = localStorage.get('killers');
		this.setKillers(killersRestore || []);
	}

	setKillers(killers) {
		this.killers = killers;
		this.saveToLocal();
	}

	createNewKillers() {
		this.setKillers([]);
	} 
}

export default KillersService;