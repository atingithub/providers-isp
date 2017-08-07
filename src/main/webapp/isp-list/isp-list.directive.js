angular.
	module('ispApp').
	directive('isps', function() {
		return {
				restrict: 'A',
        template : '<div class="list-group">' +
											'<a ng-click="$ctrl.setDataDetails(isp.id)" ng-repeat="isp in $ctrl.isps | filter:$ctrl.query | orderBy : $ctrl.ordrByProp" class="list-group-item isp-list-item">' +
												'<img ng-src="img/logo/{{isp.id}}.png" alt="logo - {{isp.id}}" class="img-responsive isp-list-item-db">' +
												'<span class="isp-list-item-name">{{isp.name}}</span>' +
												'<span class="isp-list-item-price pull-right">&#x20b9;{{isp.lowestPrice}}&nbsp; &rsaquo;</span>' +
											'</a>' +
									 '</div>'
    };
	});