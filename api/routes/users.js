const express = require("express");
const { Users } = require("../models");
const userRouter = express.Router();


userRouter.post("/register", (req,res) =>{
    Users.create(req.body)
        .then((user) => {
        res.status(201).send(user);
    });
})

module.exports = userRouter;

