"use strict";

require('./userAvatar.less');


const appModule = angular.module('userAvatar', []);

appModule.component('userAvatar', {
		template: '<img ng-src="{{userAvatarCtrl.avatarUrl}}" alt="{{userAvatarCtrl.uuid}}" class="userAvatar__circle" >',
		bindings: {
			uuid: "@"
		},
		controllerAs: "userAvatarCtrl",
		controller: function() {
			// Generating a uniq avatar for the given uniq string provided using robohash.org service
			this.avatarUrl = '//robohash.org/' + this.uuid + '?set=set2&bgset=bg2&size=70x70';
		}
});
module.exports = appModule.name;