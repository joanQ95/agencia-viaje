const { Router } = require("express");

const { Trip } = require("../db");
const router = Router();
const tripsJSON = require("../../agencyTravel.json");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (tripsJSON.length === 0) {
      throw new Error("No se encontraron viajes");
    } else {
			//console.log(tripsJSON.trips[0])
      let tripsDB = await Trip.findAll({});
			alltrips = [tripsDB[0].dataValues].concat(tripsJSON.trips) //aqui demuestro que soy barbaro
      res.status(201).json(tripsDB);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
