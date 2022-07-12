const tripsJSON = require('../../agencyTravel.json')
const { Trip } = require('../db');


function loadDb(){
	
	//console.log('aqui', tripsJSON.trips)
	tripsJSON.trips.map( e=>{
		 Trip.create({
			name: e.name,
			description: e.description,
			location: e.location,
			availability: e.availability
		})
	})
}
module.exports = {
  loadDb
}