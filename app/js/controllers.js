'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('listingController', ['$scope', function($scope) {
  $scope.courses = [{
			name: 'Introduction to Programming',
			description: 'An introduction to the theory and practice of computer programming, the emphasis of this course is on techniques of program development within the object-oriented paradigm. Topics include control structures, objects, classes, inheritance, simple data structures, and basic concepts of software development. Currently, Java is the programming language used in the course. This course has a required lab component, and is required for the major and minor in computer science. (Offered every semester)',
			pic: 'JmGNipQ.png',
			cost: 121
		}, {
			name: 'Data Structures and Algorithms',
			description: 'This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)',
			pic: 'JqSysC9.jpg',
			cost: 80
		}, {
			name: 'Robotics',
			description: 'An advanced study of the electronics, mechanics, sensors, and programming of robots. Emphasis is placed on programming robots which investigate, analyze, and interact with the environment. Topics may include mobile robots, legged robots, computer vision, and various approaches to robot intelligence. Prerequisite: CPSC 226 or permission of the instructor. (Offered alternate years)',
			pic: 'LhNjJ5O.jpg',
			cost: 103
		}, {
			name: 'Artificial Intelligence',
			description: 'This course serves as an introduction to some of the major problems and techniques in the field of artificial intelligence. Artificial intelligence generally deals with problems that are too large, complex, or poorly-specified to have exact algorithmic solutions. Topics to be covered might include knowledge representation, natural language processing, machine learning, neural nets, case-based reasoning, intelligent agents, and artificial life. Prerequisite: CPSC 327 or 329. (Offered occasionally)',
			pic: '6QS5NKk.jpg',
			cost: 55
		},{
			name: 'Introduction to data science',
			description: 'Commerce and research are being transformed by data-driven discovery and prediction. Skills required for data analytics at massive levels – scalable data management on and off the cloud, parallel algorithms, statistical modeling, and proficiency with a complex ecosystem of tools and platforms – span a variety of disciplines and are not easy to obtain through conventional curricula. Tour the basic techniques of data science, including both SQL and NoSQL solutions for massive data management (e.g., MapReduce and contemporaries), algorithms for data mining (e.g., clustering and association rule mining), and basic statistical modeling (e.g., linear and non-linear regression).)',
			pic: 'qXsvstE.png',
			cost: 65
		},{
			name: 'Introduction to Computational Finance and Financial Econometrics',
			description: 'Learn mathematical and statistical tools and techniques used in quantitative and computational finance. Use the open source R statistical programming language to analyze financial data, estimate statistical models, and construct optimized portfolios. Analyze real world data and solve real world problems.)',
			pic: 'DcNsA5G.png',
			cost: 132

		},


		 ];
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);