const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const CoursesCategories = db.define("courses-categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    coursesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "courses_id",
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categories_id",
    }
},
{
    timestamps: false,
});


module.exports = CoursesCategories;