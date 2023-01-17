const Users = require('./users.models');
const CoursesCategories = require("./courses-categories.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");
const UsersCourses = require("./users-courses.models");
const Courses = require("./courses.model")

const initModels = () => {
    Users;
    CoursesCategories;
    Categories;
    Videos;	
    UsersCourses;
    Courses;
}

module.exports = initModels;