const express = require("express");
const { Users } = require("../models");
const userRouter = express.Router();
const {generateToken , validateToken} = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");


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


module.exports = userRouter;

