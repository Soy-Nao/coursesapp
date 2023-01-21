const Course = require('../models/courses.model');
const CourseCategory = require('../models/courses-categories.models');
const Category = require('../models/categories.models');
const Video = require('../models/videos.models');

class CourseServices {

  static async getAll() {
    try {
      const result = await Course.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategoriesAndVideos() {
    try {
      const result = await Course.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt", 'id']
        },
        include: [
          {
            model: CourseCategory,
            as: 'categorys',
            attributes: ['categoriesId'],
            include: {
                model: Category,
                as: 'category',
                attributes: ['name']
              }
          },
          {
              model: Video,
              as: 'videos',
              attributes: ['title', 'url']
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create( newCourse ) {
    try {
      const result = await Course.create( newCourse )
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async update( field, id ) {
    try {
      const result = await Course.update( field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }


  
};


module.exports = CourseServices;