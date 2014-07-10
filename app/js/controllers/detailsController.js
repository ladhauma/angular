angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'settings', '$routeParams', '$location',
		function($scope, courseProvider, settings, $routeParams,$location) {

			var courseId = $routeParams.id;

			//$scope.course = courseProvider.get(courseId);
			courseProvider.get(courseId).$promise.then(function(course){
 			$scope.course = course[0];
 			//console.log(course);
 			});
			$scope.maxLength = settings.maxDescriptionLength;
				var sum=0;
				var myreviews=[];
				var avg_rating=0;
				/*courseProvider.getReviews().
				$promise.then(function(data){
				angular.forEach(data,function(item,index){
				if(item.courseId==courseId)
				{
					myreviews.push(item);
					sum+=item.rating;
					//console.log(sum);

				}
				});
				$scope.avg_rating=sum/myreviews.length;
				console.log(avg_rating);
				$scope.reviews = myreviews;
				});*/
				courseProvider.getReviews(courseId).
				$promise.then(function(data)
				{
					$scope.reviews=data;
					angular.forEach(data,function(item,index){
						sum+=item.rating;
					})
					$scope.avg_rating=sum/data.length;
				});

				$scope.update=function(review)
				{
					courseProvider.updateLikes(review);
					//alert("hiii");
				};
	}
	]);

