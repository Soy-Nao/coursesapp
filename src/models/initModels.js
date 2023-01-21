const Users = require('./users.models');
const CoursesCategories = require("./courses-categories.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");
const UsersCourses = require("./users-courses.models");
const Courses = require("./courses.model")

const initModels = () => {
    //Relaciones
    UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
    Users.hasMany(UsersCourses, { as: "courses", foreignKey: "user_id" });

    UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id"});
    Courses.hasMany(UsersCourses, { as: "users", foreignKey: "course_id"});

    Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id"});
    Courses.hasMany(Videos, { as: "videos", foreignKey : "course_id"});	

    CoursesCategories.belongsTo(Courses, { as: "course", foreignKey: "courses_id"});
    Courses.hasMany(CoursesCategories, { as: "categorys", foreignKey: "courses_id"});	

    CoursesCategories.belongsTo(Categories, { as: "category", foreignKey: "categories_id"});
    Categories.hasMany(CoursesCategories, { as: "courses", foreignKey: "categories_id"});	
};

module.exports = initModels;