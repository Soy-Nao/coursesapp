const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.model");
const Categories = require("../models/categories.models");
const CoursesCategories = require("../models/courses-categories.models");
const UsersCourses = require("../models/users-courses.models");
const Videos = require("../models/videos.models");

const users = [
  {
    firstName: "Nao",
    lastName: "Naofumi",
    password: "1234",
    email: "nao@gmail.com",
  },
  {
    firstName: "Nao2",
    lastName: "Naofumi2",
    password: "1234",
    email: "nao2@gmail.com",
  },
  {
    firstName: "Nao3",
    lastName: "Naofumi3",
    password: "1234",
    email: "nao3@gmail.com",
  },
  {
    firstName: "Nao4",
    lastName: "Naofumi4",
    password: "1234",
    email: "nao4@gmail.com",
  },
  {
    firstName: "Nao5",
    lastName: "Naofumi5",
    password: "1234",
    email: "nao5@gmail.com",
  },
];



const courses = [
  {
    title: "Programming",
    description: "Course of programming ",
    instructor: "Stivents",
  },
  {
    title: "Design",
    description: "Course of design ",
    instructor: "Pedro",
  },
  {
    title: "Cook",
    description: "Course of cook ",
    instructor: "Juan",
  },
];

const usersCourses = [
  {
    userId: 1,
    coursesId: 1,
  },
  {
    userId: 2,
    coursesId: 2,
  },
  {
    userId: 3,
    coursesId: 3,
  },
];

const categories = [
  {
    name: "Programming",
  },
  {
    name: "Cook",
  },
  {
    name: "Desing",
  },
  {
    name: "Art",
  },
  {
    name: "Mascots",
  },
];

const coursesCategories = [
  {
    categoriesId: 1,
    coursesId: 1,
  },
  {
    categoriesId: 4,
    coursesId: 2,
  },
  {
    categoriesId: 2,
    coursesId: 3,
  },
];

const videos = [
  {
    title: "Intro the course of Programming",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 1,
  },
  {
    title: "Basic the course of Programming",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 1,
  },
  {
    title: "End the course of Programming",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 1,
  },
  {
    title: "Intro the course of cook",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 2,
  },
  {
    title: "Basic the course of cook",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 2,
  },
  {
    title: "End the course of cook",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 2,
  },
  {
    title: "Intro the course of Programming",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 3,
  },
  {
    title: "Basic the course of desing",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 3,
  },
  {
    title: "End the course of desing",
    url: "https://www.youtube.com/watch?v=sdfsdfsdfsdf",
    coursesId: 3,
  },
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);
    setTimeout(() => {
      usersCourses.forEach((uc) => UsersCourses.create(uc));
    }, 200);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);
    setTimeout(() => {
      coursesCategories.forEach((cc) => CoursesCategories.create(cc));
    }, 400);
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 500);
  })
  .catch((err) => console.log(err));
