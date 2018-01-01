"use strict";

import addKillerForm from './addKillerForm/addKillerForm.module';
import displayPlayer from './displayPlayer/displayPlayer.module';
import killer from './killer/killer.module';
import killersBoard from './killersBoard/killersBoard.module';
import killersList from './killersList/killersList.module';
import userAvatar from './userAvatar/userAvatar.module';
import killersListGame from './killersListGame/killersListGame.module';

module.exports = angular.module('components', [
	userAvatar,
	killer,
	killersList,
	addKillerForm,
	killersBoard,
	displayPlayer,
	killersListGame
]);