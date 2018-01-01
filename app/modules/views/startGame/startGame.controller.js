"use strict";

const _ = require('lodash');

class StartGameController {
	constructor (killersService, $timeout, $state) {
		'ngInject';

		const currKillers = killersService.getKillers();
		if (!currKillers || currKillers.length === 0) {
			$state.go('homepage',{}, {location: 'replace'});
			return;
		}

		Object.assign(this, {
			_$state: $state,
			_killersService: killersService,
			_$timeout: $timeout,
			killers: _.shuffle(angular.copy(currKillers))
		});

		if (this.killers.length === 1) {
			this.winner = this.killers[0].name;
		}		
	}

	newGame () {
		this._killersService.createNewKillers();
		this._$state.go('createPlayers',{}, {location: 'replace'});
	}

	onRemove(uuid)  { // uuid - the died player
		// getting the player who kill
		const getKiller = (uuid) => this.killers.filter (player => player.person.uuid === uuid)[0];
		const getDiedPlayer = (uuid) => this.killers.filter (player => player.uuid === uuid)[0];

		this.killer = getKiller(uuid); // player here hit the killer
		const diedPlayer = getDiedPlayer(uuid);

		this.killer.person = diedPlayer.person; // replace the win player aim with the died player aim

		if (this.killers.length === 2) {
			this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player from list
			this._killersService.setKillers(this.killers);
			this.winner = this.killers[0].name;
			return;
		}

		this._$timeout(() => {
			this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player fro list
			this.killer = null;
			this._killersService.setKillers(this.killers);
		}, 5000);
	}
}

export default StartGameController;