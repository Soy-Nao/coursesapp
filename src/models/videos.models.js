const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Videos = db.define("videos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categories_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});


module.exports = Videos;