'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services',[]).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 200,
	maxResults : 10
})
.value('parseSettings',{
	'X-Parse-Application-Id':'9Ia6KXksL2IxEN871bTH0f7bNHJdFr6sbdLr8cwd',
	'X-Parse-REST-API-Key':'fqbnDJW68wI83Svor2yaFZGuI0iHZONbZfyocfyB',

});
