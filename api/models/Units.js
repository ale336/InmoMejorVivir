const Sequelize = require ("sequelize");
const db = require("../config/db");


class Units extends Sequelize.Model {}


Units.init (
    {
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        district : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        qty_rooms : {
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        price : {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
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