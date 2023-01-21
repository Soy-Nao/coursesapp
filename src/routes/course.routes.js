const { Router } = require('express');

const {
  getAllCourses,
  getCoursesVideos,
  createCourse,
  updateCourse
} = require('../controllers/course.controllers')

const router = Router();

router.get('/course', getAllCourses);

router.get('/course/videos', getCoursesVideos);

router.post('/course', createCourse);

router.put('/course/:id', updateCourse);


module.exports = router;