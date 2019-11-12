const Sequelize = require("sequelize");
const db = {}
const sequelize = new Sequelize("node_js","root","", {
    host : "localhost",
    dialect: "mysql"
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db