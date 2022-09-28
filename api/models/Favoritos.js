const db = require("../config/db");
const Sequelize = require ("sequelize");


class Favoritos extends Sequelize.Model {}

Favoritos.init (

    {
        idUnit: {
          type: Sequelize.INTEGER,
          allowNull: false,
    },
},

{sequelize : db , modelName : "favoritos"}

);

module.exports = Favoritos;

