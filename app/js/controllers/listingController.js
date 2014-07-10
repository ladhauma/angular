angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'settings', 'courseProvider', '$location',
		function($scope, settings, courseProvider, $nonsense) {

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			
			
			courseProvider.getCourses().$promise.then(function (data){
				courseProvider.getRatings(data).then(function(temp)
					{$scope.courses=temp;
						console.log(temp);
					});
				
			});
			
			


			
		}
	]);

/*
angular.module('myApp.controllers', [])
 .controller('courseController', ['$scope', function($scope, $http) {
 $http.get('datavar.json')
      .then(function(res){
         $scope.datavar = res.data;                
       });
       
});
*/
