const Category = require('../models/categories.models');

class CategoryServices {

  static async create( newCategory ) {
    try {
      const result = await Category.create( newCategory );
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async delete( id ) {
    try {
      const result = await Category.destroy({
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

};

module.exports = CategoryServices;