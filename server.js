//requires
const express = require('express')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const request = require('request')


const app = express()

//connect to mongoose
// mongoose.connect('')
//middleware
app.use(express.static('./public'))
app.get('/', function(req, res) {

    res.sendFile('./public/html/index.html', {root:'./'})
})
app.get('/search', function(req, res){
	// console.log(req)
	var googlePlaceApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.query}&key=AIzaSyBQaVXoS5ADQRsIvPFGug1J2To4HPUk84I`
	request(googlePlaceApi, function(err, response, dataFromServer){
		console.log(err)
		console.log(req.query)
		console.log(dataFromServer)
		res.send(dataFromServer)
		console.log('apiCallworking')
	})
  })
//listen statement
app.listen(8080, function(){
    console.log('server listening on port 8080')
})




// var express = require(‘express’)
//
// var app = express()
//
// var request = require(‘request’)
//
// app.get(‘/search’, function(req, res){
//
//     var placeAPI = ’https://graph.facebook.com/v2.11/search?type=place&center=40.7304,-73.9921&distance=1000&fields=name,checkins&access_token=186723258550710%7C8069d0acffdee876456780730de0e0c7'
//
//     request(placeAPI, function(err, response, dataFromServer){
//
//         console.log(err)
//
//         console.log(dataFromServer)
//
//         res.send(dataFromServer)
//
//
//         console.log(‘sent/recieved place api’)
//     })
//
// })
//
//
// app.listen(8085)
