const Users = require ("./Users");
const Units = require ("./Units");


Users.belongsToMany(Units, { through: "favhouses" });

Units.belongsToMany(Users, { through: "favhouses" });





module.exports = {Users, Units};