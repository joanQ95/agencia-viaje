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
      let tripsDB = await Trip.findAll({

			});
			console.log(tripsDB[0].dataValues)
      res.status(201).json(tripsDB);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
