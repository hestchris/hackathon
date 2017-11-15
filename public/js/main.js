var mainVm = new Vue({
	// google.maps.event.addDomListener(window, 'load', init);

    el: '#app',
    data: {
		userinput:''
    },
	methods: {
		submitlocation: function(event) {
			event.preventDefault()
			// var userinput = this.userinput
			// console.log(userinput)


				var userinput = $('#locationTextField').val()
				console.log(userinput)

				$.get(`/search?query=${userinput}`, function(dataFromServer, status){
				dataFromServer = JSON.parse(dataFromServer)
				console.log(dataFromServer)
				// console.log(status)
				var latitude = dataFromServer.results[0].geometry.location.lat
				var longitude = dataFromServer.results[0].geometry.location.lng

				var fixLat = latitude.toFixed(2)
				var fixLng = longitude.toFixed(4)


				console.log(fixLat, fixLng)


				$.get(`/place?center=${fixLat},${fixLng}`, function(dataFromServer, status){

					dataFromServer = JSON.parse(dataFromServer)
					console.log(dataFromServer)
				})

				})

				})



	}
},

		}
	},
})
