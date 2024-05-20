const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    category_id: {
      type: DataTypes.INTEGER, // Data types are set to integers
      allowNull: false, // Every value must be filled
      primaryKey: true, // Every value must be unique
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING, // Data types are set to strings
    },
  },    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;