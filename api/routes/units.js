const express = require("express");
const { Units } = require("../models");
const unitsRouter = express.Router();

unitsRouter.post("/newunit", (req, res)=>{
    Units.create(req.body)
    .then((unit)=>{
        res.send(unit);
    })
});


unitsRouter.get("/all" , (req,res)=> {
    Units.findAll()
    .then((units)=>res.send(units))
});


module.exports = unitsRouter;