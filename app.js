const express = require('express');
const app = express();

require('dotenv').config();
const AlquileresRoutes = require('./routes/alquileresRoutes.js')
const autosRoutes = require('./routes/autosRoutes.js')
const ClienteRoutes = require('./routes/clienteRoutes.js')

const PORT = process.env.PORT || 6000

app.use(express.json());

app.use('/api', AlquileresRoutes);
app.use('/api', autosRoutes);
app.use('/api', ClienteRoutes);

app.listen(PORT, () => {
    console.log("servidor corriendo");
});