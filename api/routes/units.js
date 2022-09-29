const express = require("express");
const { Op } = require("sequelize");
const { Units } = require("../models");
const unitsRouter = express.Router();

//RUTA PARA CREAR NUEVAS UNIDADES
unitsRouter.post("/newunit", (req, res)=>{
    Units.create(req.body)
    .then((unit)=>{
        res.send(unit);
    })
});


//RUTA PARA ELIMINAR UNA UNIDAD

unitsRouter.delete("/delete/:id", (req, res)=>{
    Units.destroy({
        where :{id : req.params.id}
    })
    res.sendStatus(202);
});


//RUTA PARA MOSTRAR TODAS LAS UNIDADES
unitsRouter.get("/all" , (req,res)=> {
    Units.findAll()
    .then((units)=>res.send(units))
});

//RUTA PARA BUSCAR UNIDADES

unitsRouter.get("/search/:query",(req,res)=>{
    Units.findAll({
        where:{
            address : {
                [Op.iLike] : "%" + req.params.query + "%",
            },
        },
    })
    .then((units)=>res.send(units));
});



module.exports = unitsRouter;


