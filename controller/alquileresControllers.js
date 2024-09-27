const{alquileres} = require('../models')

exports.createAlquiler = async (req,res) =>{
    const {fecha_inicio,fecha_fin}= req.body;
    try {
        const Crear = await auto.create({fecha_inicio,fecha_fin})
        res.json(Crear);
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error'})
        
    };
};

exports.getAlquiler = async (req, res) => {
    try {
        const alquiler = await alquileres.findAll();
        res.json(alquiler);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'Error al obtener los alquileres' });
    }
}


exports.historial = async (req, res) => {
    try {
        const alquileress = await alquileres.findAll({
            include: [
                {
                    model: cliente,
                    as: 'clientes',
                    attributes: ['nombre', 'correo', 'numero_licencia'] 
                },
                {
                    model: autos,
                    as: 'autos',
                    attributes: ['marca', 'modelo', 'ano', 'disponible']
                },
            ]
        });
        res.json(alquileress);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al obtener el historial', error: error.message });
    }
};




