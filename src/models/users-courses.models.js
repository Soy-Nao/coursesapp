const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Courses = require("./courses.model");
const Users = require("./users.models");

const UsersCourses = db.define(
  "users-courses",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
      references:{
        model: Users,
        key: "id"
      }
    },
    coursesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "courses_id",
      references: {
        model: Courses,
        key: "id",
      }
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsersCourses;
