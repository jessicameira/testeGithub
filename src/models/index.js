import { dotenv } from 'dotenv'
import { format } from 'path';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');


const db = {};
let sequelize = {}

if (process.env.DATABASE_URL) {

  sequelize = new Sequelize(config)
} else {
 sequelize = new Sequelize({
  username: 'postgres',
  password: 'pgsql',
  database: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
});
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;