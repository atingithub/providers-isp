angular.
  module('core.isp').
  factory('Isp', ['$resource',
		function($resource) {
			
			return {
				IspList: $resource('http://localhost:8081/providers-isp/api/isp?type=json&query=isp_list/:ispId.json', {}, {
					query: {
						method: 'GET',
						params: {ispId: 'isps'},
						isArray: true
					}}),
				
				DemoIspList: $resource('isp/isp.json', {}, {
					query: {
						method: 'GET',
						params: {ispId: 'isps'},
						isArray: true
					}}),
				
				ApiHits: $resource('isp/isp.json', {}, {
					query: {
						method: 'GET',
						params: {ispId: 'isps'},
						isArray: false
					}}),
				
				DownloadFile: $resource('http://localhost:8081/provider-isp/api/isp/download?filename=airtel', {}, {
					query: {
						method: 'GET',
						headers: {
        			accept: 'application/*'
    				},
						responseType: 'arraybuffer'
					}})
			}

    }				
  ]);