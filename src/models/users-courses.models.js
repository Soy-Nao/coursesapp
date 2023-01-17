const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const UsersCourses = db.define("users-courses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = UsersCourses;