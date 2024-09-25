const {auto}  = require('../models')


exports.createAuto = async (req,res) =>{
    const {marca,modelo,ano,disponible}= req.body;
    try {
        const Crear = await auto.create({marca,modelo,ano,disponible})
        res.json(Crear);
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error'})
        
    };
};

exports.getAuto = async (req, res) => {
    
    try {
        const autos = await auto.findAll();
        res.json(autos);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: 'Error al obtener los autos' });
    }
}

exports.actualizarAuto = async (req, res) =>{
    const {id} = req.params;
    const {marca,modelo,ano,disponible} = req.body;
  try {
    let resautos = await auto.findByPk(id);
    if(resautos){
        resautos.marca = marca;
        resautos.modelo = modelo;
        resautos.ano = ano;
        resautos.disponible = disponible;
        await resautos.save();
        res.json(resautos);
    }else{
        res.json({mensaje:'Auto no encontrado'})
    }
        
    } catch (error) {
        console.log(error);
        res.json({mensaje:'Error al actualizar'})
        
    }
};

exports.eliminarAuto = async (req, res) => {
    const {id} = req.params;
    try {
        const eliminar = await auto.findByPk(id);
        if(eliminar){
            await eliminar.destroy();
            res.json({mensaje:'Auto eliminado'})
        }else{
            res.json({mensaje:'Auto no encontrado'})
        }
     
    } catch (error) {
        console.log(error);
        res.json({mensaje:'error no eliminado'})
    }
}

exports.verautoId= async (req, res) => {
    const {idA} = req.params;
    console.log(idA);
    try {
        const ver = await auto.findByPk(idA)
    return res.json(ver);
        
    } catch (error) {
        console.log(error);
        
        res.json({ mensaje: "error no muestra id espe" });
    }
    
}
exports.verautodispo= async (req, res) => {
    try {
        const ver = await auto.findAll({WHERE :{disponible : 1}});
       return res.json(ver);
        
    } catch (error) {
        console.log(error);
        
        res.json({ mensaje: "error no muestra id espe" });
    }
    
}






