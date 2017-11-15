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

				console.log(dataFromServer.results['0'].geometry.location.lat)
				console.log(status)

				})


		}
	},
})
