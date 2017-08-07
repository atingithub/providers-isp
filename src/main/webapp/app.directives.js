angular.
	module('ispApp').
	directive('star', function() {
		return {
      restrict: 'A',
      template: '<ul class="rating list-unstyled list-inline">' +
                  '<li ng-repeat="star in stars" ng-class="star">' +
                    '<span class="glyphicon glyphicon-star"></span>' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
				max: '='
      },
      link: function (scope, elem, attrs) {
				scope.$watch('ratingValue', function() {
					scope.stars = [];
					for (var  i = 0; i < scope.max; i++) {
						scope.stars.push({filled: i < scope.ratingValue});
					}
				});
      }
    }
	});
