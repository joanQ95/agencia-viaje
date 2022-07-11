const { Router } = require('express');

const { Trip } = require('../db');
const router = Router();
const tripsJSON = require('../../agencyTravel.json')

router.post('/', async (req,res)=> {
  //console.log(req.body)
	try{
		const {name, description, location, availability} = req.body
		if(!name || !description){
			throw new Error('Completar los campos obligatorios')
		}

		let tripDbName = await Trip.findAll({ 
			where: { name: name } 
		})
		if(tripDbName.length) throw new Error('El nombre ya existe, ingresar otro')

		const newTrip = await Trip.create({
			name,
			description,
			location,
			availability
		})
		console.log(newTrip)
    res.status(202).json({message: 'Trip creado correctamente'})  
  }catch (err){
    res.status(404).json(err.message)
  }
})

module.exports = router;