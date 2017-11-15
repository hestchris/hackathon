var mainVm = new Vue({

    el: '#app',
    data: {
		userinput:'',
		locations:[],
		parks:[],
		restaurants:[],

    },
	methods: {
		submitlocation: function(event) {
			
			event.preventDefault()	

				this.locations = []			
				this.parks = []			
				this.restaurants = []			

				var userinput = $('#locationTextField').val()
				
				console.log(userinput)
				
				$.get(`/search?query=${userinput}`, function(dataFromServer, status){

					dataFromServer = JSON.parse(dataFromServer)
					
					// console.log(dataFromServer)

					var latitude = dataFromServer.results[0].geometry.location.lat
					var longitude = dataFromServer.results[0].geometry.location.lng

//GET REQUEST TO FACEBOOK

					$.get(`/place?center=${latitude},${longitude}`, function(facebookData, status){

						facebookData = JSON.parse(facebookData)
						
						console.log(facebookData)

						// console.log(facebookData.checkins)

						for(var i = 0; i < facebookData.data.length; i++){

							// console.log(facebookData.data[i].checkins)

		//PUSH AND SORT LOCATIONS ARRAY

								mainVm.locations.push(facebookData.data[i])	

								mainVm.locations.sort(function(a,b) {

									return b.checkins - a.checkins
								}) 

		//PUSH PARKS ARRAY

							if (facebookData.data[i].category === 'Park') {

								mainVm.parks.push(facebookData.data[i])
							}

		//PUSH RESTAURANTS ARRAY

							if (facebookData.data[i].category === 'Restaurant') {

								mainVm.restaurants.push(facebookData.data[i])
							}
								
						}
								console.log(mainVm.locations)
								console.log(mainVm.parks)
								console.log(mainVm.restaurants)

					})
				
			})
		}
	

	},




})
