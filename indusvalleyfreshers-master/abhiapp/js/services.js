'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 200,
	maxResults : 20
}).value('parseSettings', {
	'X-Parse-Application-Id':'fh7sODS0quBi96Db2iyMxoVd153qQojl05a46F5x',
	'X-Parse-API-Key':'Y9wze8t1KhlYKJhjjO9Z89B72X1He9RuunBOdGDL',
});
