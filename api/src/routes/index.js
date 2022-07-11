const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const tripsRouter = require('./trips');
const tripRouter = require('./trip');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/trips', tripsRouter); 
router.use('/trip', tripRouter); 


module.exports = router;
