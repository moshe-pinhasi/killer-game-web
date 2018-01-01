"use strict";

class PlayersPresentionsController {

	constructor(gameService, killersService, $state) {
		'ngInject';

		const currKillers = killersService.getKillers();
		if (!currKillers || currKillers.length === 0) {
			$state.go('homepage',{}, {location: 'replace'});
			return;
		}

		const players = gameService.match(currKillers);
		killersService.setKillers(players);

		Object.assign(this, {
			_$state: $state,
			_index: 0,
			players: players,
			player: players[0],
			_finished: false
		});
	}

	next() {
		if (this._finished) {
			this._$state.go('startGame',{}, {location: 'replace'});
		}

		if (this._index === (this.players.length-1)) {
			return;
		}

		this.player = this.players[++this._index];
		(this._index === (this.players.length-1)) && (this._finished = true);
	}

	back() {
		if (this._index === 0) {
			return;
		}
		this._finished = false;
		this.player = this.players[--this._index];
	}

	done() {
		console.log("done");
	}

}

export default PlayersPresentionsController;