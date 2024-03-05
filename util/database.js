const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'ki11stick', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize; 