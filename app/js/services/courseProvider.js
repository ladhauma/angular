'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', ['$http', '$q','$resource','parseSettings',

		function($http, $q,$resource,parseSettings) {

			var cRef = $resource('https://api.parse.com/1/classes/courses/:courseId', null, 
			{

				getc : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						return raw.results;
					}
				},
				create: {
 					method : 'POST',
 					isArray : false,
 					headers: parseSettings
 				}
			})


			function getCourses() {
				return cRef.getc();
			}

			function addCourse(course) 
			{
				return cRef.create(course);
			}
			function getCourse(id) {
				/* for data json obj
				var defer = $q.defer();
				$http.get('data/courses.json').success(function(courses) {
					angular.forEach(courses, function(item, index) {
						if (item.id == id) {
							defer.resolve(item);
						}
					})
				});
				return defer.promise;
				*/

				return cRef.getc({
							id: id						
					});
			}

			var courseRef = $resource('https://api.parse.com/1/classes/review/:courseId', null, 
			{

				getreview : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						return raw.results;
					}
				},
				create: {
 					method : 'POST',
 					isArray : false,
 					headers: parseSettings
 				},
 				update: {
					method: 'PUT',
					isArray: false,
					headers: parseSettings
				}
			})

			function updateRating(courseID,sum,avg)
			{ 
				return courseRef.update(courseID,{
				    sum: sum,
					average: avg
					//'courseID': courseID
				});
			}	
	

			function getReviews(id) 
			{
				
				
				return courseRef.getreview({
						where : {'courseId': id}

                    }
				);
				/*return courseRef.getreview({
					id:id
				});*/
			}
			function addReview(review) 
			{
				courseRef.create(review);
			}
			function updateLikes(review)
			{
				return courseRef.update({
					courseId:review.objectId
				},{
					likes:review.likes
				});
			}

			function getRatings(courses)
			{
				var temp=[];
				var deferred = $q.defer();
				angular.forEach(courses, function(courseItem, courseIndex){
					var sum=0;var av0;var tempr=[];
					courseRef.getreview().$promise.then(function(reviews){
						angular.forEach(reviews,function(reviewItem,reviewIndex){
						if(courseItem.objectId==reviewItem.courseId)
						{
							tempr.push(reviewItem);
							sum+=reviewItem.rating;
						}//if ends
						})//INNER
						courseItem.rating=sum/tempr.length;
						temp.push(courseItem);
						console.log(sum);
						if(temp.length==courses.length)
							{
								deferred.resolve(temp);}
						})//get reviews


				})//OUTER

				return  deferred.promise;
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse,
				addReview: addReview,
				getReviews:getReviews,
				getRatings:getRatings,
				updateRating:updateRating,
				updateLikes:updateLikes
			};

		}
	]);