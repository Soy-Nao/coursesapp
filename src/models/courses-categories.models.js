const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const CoursesCategories = db.define("courses-categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    courses_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = CoursesCategories;