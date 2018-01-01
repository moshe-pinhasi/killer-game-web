"use strict";

import createPlayers from './createPlayers/createPlayers.module';
import homepage from './homepage/homepage.module';
import playersPresentions from './playersPresentions/playersPresentions.module';
import startGame from './startGame/startGame.module';

module.exports = angular.module('views', [
	homepage,
	createPlayers,
	playersPresentions,
	startGame
]);