"use strict";

import GameService from './gameService';
import WordsService from './wordsService';
import KillersService from './killersService';

module.exports = angular.module('services', [])
	.service('gameService', GameService)
	.service('wordsService', WordsService)
	.service('killersService', KillersService);
