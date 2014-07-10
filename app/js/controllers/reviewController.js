angular.module('myApp.controllers')
	.controller('reviewController', ['$scope', 'courseProvider', 'settings', '$routeParams', '$location',
		function($scope, courseProvider, settings, $routeParams,$location) {

			var courseId = $routeParams.id;
			/*
			//$scope.course = courseProvider.get(courseId);
			courseProvider.get(courseId).then(function(course){
 			$scope.course = course;
 			console.log(course);
 			});*/
		$scope.addReview= function(review,newCourseForm)
			{
				review.courseId=courseId;
				if (newCourseForm.$invalid) {
					alert('validation failed');
				} else 
				{
					review.likes=0;

					courseProvider.addReview(review);
					//var objid=MOC94toWWr;
					//courseProvider.updateRating("MOC94toWWr",30,4);
					$location.url('/details/'+courseId);
					//console.log('saving review : ' + review.username);
				}
				$scope.description=review.comment;

			};
			
			


		}
	]);
