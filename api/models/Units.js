const Sequelize = require ("sequelize");
const db = require("../config/db");


class Units extends Sequelize.Model {}


Units.init (
    {
        address : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        superficie : {
            type : Sequelize.INTEGER,
            allowNull: false,
        },
        description : {
            type:Sequelize.STRING(500),
            allowNull: false,
        },
        price : {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image1: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        image2: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        image3: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        type_unit : {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },
    {sequelize:db, modelName : "units"}
);


module.exports = Units;