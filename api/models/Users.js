const Sequelize = require ("sequelize");
const db = require ("../config/db");
//const Users = require("../models");


class Users extends Sequelize.Model {}

Users.init (    
    {
        name : {
            type : Sequelize.STRING,
            allowNull:false,
        },
        lastname : {
            type : Sequelize.STRING,
            allowNull:false,
        },
        email : {
            type : Sequelize.STRING,
            allowNull:false,
        },
        password : {
            type : Sequelize.STRING,
            allowNull:false,
        },
    },
    {sequelize:db,modelName:"users"}
);

module.exports = Users;
