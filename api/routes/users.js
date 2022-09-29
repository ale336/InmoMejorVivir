const express = require("express");
const { Users, Units } = require("../models");
const userRouter = express.Router();
const {generateToken , validateToken} = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");

userRouter.get("/all", (req,res) =>{
    Users.findAll(req.body)
        .then((users) => res.send(users));
});


userRouter.post("/register", (req,res) =>{
    Users.create(req.body)
        .then((user) => { 
        res.status(201).send(user);
    })
});


userRouter.post ("/login", (req,res)=>{
    //obtener los datos del request
    const {email,password} = req.body;
    Users.findOne ({ where : {email}  }) //obtengo datos del usuario

        .then((user)=>{
            if (!user) return res.sendStatus(401)   
            user.validatePassword(password)
                .then((isValido) => {
                    if (!isValido) return res.sendStatus(401)
                    
                    const payload = { 
                        name : user.name,
                        email : user.email
                    };

                    const token = generateToken(payload);
                    
                    res.cookie("token",token);
                    
                    res.send(payload);
                });
        });

});


userRouter.get("/secret",validateAuth,(req,res) => {   

    res.send(req.user)
});


userRouter.get("/me",validateAuth, (req,res) => {

    res.send(req.user);
});


userRouter.post("/logout", (req,res) => {

    res.clearCookie("token");

    res.sendStatus(204);//No Content , se hizo la tarea, nada que responder.
});


//
//CREAR FAVORITOS

userRouter.put("/:id", (req, res) => {
    const unit_id = req.params.id;
    const users_id = req.body.id;
    //console.log(unit_id,users_id);
    Users.findByPk(users_id).then((user)=>{
        
      Units.findByPk(unit_id)
      .then((house)=>{
        user.addUnits(house)
      })
      res.sendStatus(204);
});
});

//BORRAR FAVS

userRouter.delete("/:id", (req, res) => {
    const unit_id = req.params.id;
    const users_id = req.body.id;
    //console.log(unit_id,users_id);
    Users.findByPk(users_id).then((user)=>{
        
      Units.findByPk(unit_id)
      .then((house)=>{
        user.removeUnits(house)
      })
      res.sendStatus(204);
});
});

//MOSTRAR FAVS

userRouter.get("/allfavs/:id", (req,res)=>{
    const users_id = req.params.id;
    Users.findByPk(users_id)
    .then(async(user)=>{
        const results = await user.getUnits()
        res.send(results);
    })
});



module.exports = userRouter;
