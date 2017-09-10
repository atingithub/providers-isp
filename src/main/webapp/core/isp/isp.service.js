angular.
  module('core.isp').
  factory('Isp', ['$resource',
		function($resource) {
			
			return {
				IspList: $resource('http://localhost:8086/providers-isp/api/isp?type=json&query=isp_list/:ispId.json', {}, {
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
				
				ApiHits: $resource('http://localhost:8086/providers-isp/api/isp/hits', {}, {
					query: {
						method: 'GET',
						isArray: true
					}}),
				
				UpdateApiHits: $resource('http://localhost:8086/providers-isp/api/isp/hits/update', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}}),
				
				DownloadFile: $resource('http://localhost:8086/providers-isp/api/isp/download?filename=:filename', {}, {
					get: {
						method: 'GET',
						dataType: 'binary',
						processData: false,
						headers: {
        			accept: 'application/*'
    				},
						responseType: 'arraybuffer'
					}})
			}

    }				
  ]);