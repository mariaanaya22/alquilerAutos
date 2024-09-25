const express = require('express')
const router = express.Router()
const AutosControllers = require('../controller/autoControllers')

router.post('/auto',AutosControllers.createAuto);
router.get('/auto',AutosControllers.getAuto);
router.put('/auto/:id',AutosControllers.actualizarAuto);
router.delete('/auto/:id',AutosControllers.eliminarAuto);
router.get('/auto/:idA',AutosControllers.verautoId);
router.get('/autodispo/',AutosControllers.verautodispo);

module.exports = router