const express = require('express')
const bcrypt = require('bcryptjs');

const router = express.Router()
const ClienteControllers = require('../controller/clientesControllers')

router.post('/crearclientes',ClienteControllers.createCliente);
router.get('/login', ClienteControllers.loginCliente);

router.put('/actualizar/:id', ClienteControllers.actualizarcliente);
router.delete('/Eliminarclientes/:id', ClienteControllers.eliminarCliente);
router.get('/verclientes/:idC', ClienteControllers.verclienteId);

module.exports = router