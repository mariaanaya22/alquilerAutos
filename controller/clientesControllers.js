const {cliente} = require('../models')
const bcrypt = require('bcryptjs');
exports.createCliente = async (req, res) => {
    const { nombre, correo, numero_licencia, contraseña } = req.body; 
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const Crear = await cliente.create({
            nombre,
            correo,
            numero_licencia,
            contraseña: hashedPassword 
        });
        res.json(Crear);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'error' });
    }
};

exports.loginCliente = async (req, res) => {
    const { correo, contraseña } = req.body; // Obtener correo y contraseña
    try {
        const usuario = await cliente.findOne({ where: { correo } }); // Buscar por correo
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Correo no encontrado' });
        }

        const esValida = await bcrypt.compare(contraseña, usuario.contraseña); // Comparar contraseña
        if (!esValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        res.json({ mensaje: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
};


exports.actualizarcliente = async (req, res) =>{
    const {id} = req.params;
    const {nombre,correo,numero_licencia} = req.body;
  try {
    let rescliente = await cliente.findByPk(id);
    if(rescliente){
        rescliente.nombre= nombre;
        rescliente.correo= correo;
        rescliente.numero_licencia= numero_licencia;
        await rescliente.save();
        res.json({mensaje:'cliente  actualizado'})
   
    }else{
        res.json({mensaje:'cliente  no encontrado'})
    }
        
    } catch (error) {
        console.log(error);
        res.json({mensaje:'Error al actualizar'})
        
    }
};

exports.eliminarCliente = async (req, res) => {
    const {id} = req.params;
    try {
        const eliminar = await cliente.findByPk(id);
        if(eliminar){
            await eliminar.destroy();
            res.json({mensaje:'cliente  eliminado'})
        }else{
            res.json({mensaje:'cliente  no encontrado'})
        }
     
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error no eliminado'})
    }
};

exports.verclienteId= async (req, res) => {
    const {idC} = req.params;
    console.log(idC);
    try {
        const ver = await cliente.findByPk(idC)
    return res.json(ver);
        
    } catch (error) {
        console.log(error);
        
        res.json({ mensaje: "error no muestra id espe" });
    }
    
};





