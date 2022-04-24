const Sequileze = require("sequelize");

const connection = new Sequileze('guiapress', 'root', '----',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});


module.exports = connection;