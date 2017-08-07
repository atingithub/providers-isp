angular.
  module('ispApp').
  component('ispList', {
    templateUrl: 'isp-list/isp-list.template.html',
    controller: ['Isp', 'Data', '$location', 
      function IspListController(Isp, Data, $location) {
				
				var self = this;
				
				self.isps = Isp.IspList.query();
				/*self.isps = Isp.DemoIspList.query();*/
				
				this.isps.$promise.then(function(responseData) {
					
					var data = responseData;
					
					console.log(responseData);
					for(var i = 0; i < data.length; i++) {
						var id = data[i].id;
						
						Data.isp[id] = {};
						
						Data.isp[id].id = data[i].id;
						Data.isp[id].contactNo = data[i].contactNo;
						Data.isp[id].description = data[i].description;
						Data.isp[id].email = data[i].email;
						Data.isp[id].image = data[i].image;
						Data.isp[id].lowestPrice = data[i].lowestPrice;
						Data.isp[id].maxSpeed = data[i].maxSpeed;
						Data.isp[id].name = data[i].name;
						Data.isp[id].rating = data[i].rating;
						Data.isp[id].url = data[i].url;
					}
					
					self.isp = Data.isp[data[0].id];
					self.totalIsp = self.isps.length;
					self.totalApiHits = 749;
   			});
				
				self.ordrByProp = 'price';
				self.displayCross = false;
								
				self.setDataDetails = function setDataDetails(ispId)
				{
					self.isp = Data.isp[ispId];
				}
								
				self.toggleDisplay = function toggleDisplay(onOff)
				{
					self.displayCross = onOff;
				}
				
				self.link = function link(linkUrl)
				{
					window.open(linkUrl, "_blank");
				}
				
				self.share = function share(ispId) 
				{
					console.log("share");
				}
				
				self.download = function download(ispId)
				{
					Isp.DownloadFile.query().$promise.then(function(response) {
						var url = '/provider-isp/api/isp/download?filename=' + ispId;
						window.open(url);
					});
				}
				
      }
    ]
  });