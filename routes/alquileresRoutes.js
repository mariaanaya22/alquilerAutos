const express = require('express')
const router = express.Router()
const alquileresControllers = require('../controller/alquileresControllers')
router.get('/alquileres', alquileresControllers.getAlquiler);
router.post('/alquileres', alquileresControllers.createAlquiler);
router.get('/alquilerhis',alquileresControllers.historial);



module.exports = router