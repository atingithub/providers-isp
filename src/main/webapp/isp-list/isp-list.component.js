angular.
  module('ispApp').
  component('ispList', {
    templateUrl: 'isp-list/isp-list.template.html',
    controller: ['Isp', 'Data',
      function IspListController(Isp, Data) {
				
				var self = this;
				
				self.isps = Isp.IspList.query();
				/*self.isps = Isp.DemoIspList.query();*/
				Isp.ApiHits.query().$promise.then(function(response) {
					console.log(response);
					self.totalApiHits = response[0].hitCount;
				});
				
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
					self.postApiHits();
   			});
				
				self.orderByProp = 'price';
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
					self.postApiHits();
					window.open(linkUrl, '_blank');
				}
				
				self.share = function share(shareText)
				{
					var shareLink = '';
					switch(shareText) {
						case 'Facebook':
							shareLink = 'https://facebook.com/sharer.php?u=https://github.com/atingithub/providers-isp';
							break;
						case 'Twitter':
							shareLink = 'https://twitter.com/intent/tweet?text={{pageTitleUri}}\'%20\'{{pageLink}}';
							break;
						case 'Google':
							shareLink = 'https://plus.google.com/share?url={{pageLink}}';
							break;
						case 'LinkedIn':
							shareLink = 'https://www.linkedin.com/shareArticle?mini=true&url={{pageLink}}&title={{pageTitleUri}}';
							break;
					}
					window.open(shareLink, '_blank');
				}
				
				self.download = function download(ispId)
				{
					//NOTE : PDF gets corrupted with this technique
					/*
					var fileName = "file_name.pdf";
					var a = document.createElement("a");
					document.body.appendChild(a);
					Isp.DownloadFile.get({filename : ispId}).$promise.then(function(result) {
						var file = new Blob([result], {type: 'application/octet-stream'});
						var fileURL = window.URL.createObjectURL(file);
						a.href = fileURL;
						a.download = fileName;
						a.click();
					});
					*/
					/* as an alternative following is used on temporary basis */
					var dlUrl = '/providers-isp/api/isp/download?filename=' + ispId;
					window.open(dlUrl, '_blank');
					self.postApiHits();
				}
				
				self.postApiHits = function postApiHits() {
					var hit = {};
					hit.id = 1;
					hit.hitCount = self.totalApiHits + 1;
					console.log(hit);
					
					Isp.UpdateApiHits.save({}, hit).$promise.then(function(response) {
						console.log(response.hitCount);
						self.totalApiHits = response.hitCount;
					});
				}
			}
    ]
  });