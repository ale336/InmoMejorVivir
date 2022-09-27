const express = require("express");
const { Units } = require("../models");
const { update } = require("../models/Users");
catRouter = express.Router();


//MOSTRAR UNITS SEGUN CATEGORIAS
catRouter.get("/:type_unit",(req,res)=>{
    Units.findAll(
        {where:{
            type_unit : req.params.type_unit
        }})
        .then((units)=>{
            res.send(units)}
    )
});

//MODIFICAR UNA CATEGORIA

catRouter.put("/:id", (req,res)=>{
    const [row , update] = Units.update (req.body , {where
    :{id: req.params.id},returning:true,});
    const categoria = update[0];
    res.send(categoria)
});


module.exports = catRouter;

