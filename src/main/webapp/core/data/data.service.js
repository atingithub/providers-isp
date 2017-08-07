angular.
  module('core.data').
  factory('Data', function() {
		
	  var data = {
			isp : {},
			rating: {},
			ispCount : 10,
			hitCount : 746
		};
	
		return data;
		
	});