const {cliente} = require('../models')

exports.createCliente = async (req,res) =>{
    const {nombre,correo,numero_licencia}= req.body;
    try {
        const Crear = await cliente.create({nombre,correo,numero_licencia})
        res.json(Crear);
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error'})
        
    };
};

exports.getcliente = async (req, res) => {
    
    try {
        const clientes = await cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'Error al obtener los cliente' });
    }
}

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
}

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
    
}





