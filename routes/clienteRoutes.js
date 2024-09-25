const express = require('express')
const router = express.Router()
const ClienteControllers = require('../controller/clientesControllers')

router.post('/clientes',ClienteControllers.createCliente);
router.get('/clientes', ClienteControllers.getcliente);

router.put('/clientes/:id', ClienteControllers.actualizarcliente);
router.delete('/clientes/:id', ClienteControllers.eliminarCliente);
router.get('/clientes/:idC', ClienteControllers.verclienteId);

module.exports = router