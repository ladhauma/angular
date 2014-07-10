'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
 .directive('myPreview', function(){
  return {
    restrict: 'E',
    //templateUrl : 'partials/preview.html',
    scope: {
      previewContent : '='
    }
  };
})
.directive('myProgressBar',function(){
  return{
    restrict:'E',
    templateUrl:'partials/progressBar.html'
  }
});
