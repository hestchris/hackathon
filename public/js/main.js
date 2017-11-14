var mainVm = new Vue({
	// google.maps.event.addDomListener(window, 'load', init);

    el: '#app',
    data: {
		userinput:''
    },
	methods: {
		submitlocation: function(event) {
			event.preventDefault()
			var userinput = this.userinput
			console.log(userinput)
			$.get(`/search?query=${userinput}`, function(dataFromServer){
				console.log(dataFromServer)
			})
			// $.get(`/search`, userinput, function(dataFromServer){
			// 	console.log(dataFromServer)
			// })

			// var vm = this;

			// axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + this.userinput + '&key=AIzaSyBQaVXoS5ADQRsIvPFGug1J2To4HPUk84I')
			// .then(function(datareturned){
			// 	console.log(datareturned)
			// })
			// // this.$http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + this.userinput + '&key=AIzaSyBQaVXoS5ADQRsIvPFGug1J2To4HPUk84I', function(data) {
			// // 	console.log('sent successfully')
			// // 	console.log(data)
			// // })
		}
	}
})
