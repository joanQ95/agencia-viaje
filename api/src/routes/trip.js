const { Router } = require("express");

const { Trip } = require("../db");
const router = Router();
const tripsJSON = require("../../agencyTravel.json");

router.post("/", async (req, res) => {
  //console.log(req.body)
  try {
    const { name, description, location, availability } = req.body;
    if (!name || !description) {
      throw new Error("Completar los campos obligatorios");
    }

    let tripDbName = await Trip.findAll({
      where: { name: name },
    });
    if (tripDbName.length)
      throw new Error("El nombre ya existe, ingresar otro");

    const newTrip = await Trip.create({
      name,
      description,
      location,
      availability,
    });
    console.log(newTrip);
    res.status(202).json({ message: "Trip creado correctamente" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, location, availability } = req.body;
    let errores = [];
    if (name) {
      if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(name)) {
        errores.push("name");
      } else {
        await Trip.update(
          {
            name,
          },
          {
            where: { id },
          }
        );
      }
    }
		if (description) {
      if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(description)) {
        errores.push("description");
      } else {
        await Trip.update(
          {
            description,
          },
          {
            where: { id },
          }
        );
      }
    }
		if (location) {
      if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(location)) {
        errores.push("location");
      } else {
        await Trip.update(
          {
            location,
          },
          {
            where: { id },
          }
        );
      }
    }
		if (availability) {
      if (!/^[a-zA-Z0-9\s_\-\.\'\!\&\@\$]+$/.test(availability)) {
        errores.push("availability");
      } else {
        await Trip.update(
          {
            availability,
          },
          {
            where: { id },
          }
        );
      }
    }
		if(errores.length>0){
			const error = errores.join(', ')
			res.send(`Los siguientes campos no fueron actualizados: ${error}.`)
		}
		res.send(`Campos actualizados correctamente.`)
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let searchId = await Trip.findAll({
      where: { id },
    });
    if (searchId.length > 0) {
      await Trip.destroy({
        where: { id },
      });
    }
    res.status(204).json({ message: "Eliminado correctamente" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
