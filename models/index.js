// import models
const Product = require('./Product');
const Category = require('./category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id', 
});

// Categories have many Products

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id', // Foregin key in the product
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediate model
  foreignKey: 'product_id', // The foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id',
});

// Many Product Category

Category.hasMany(Product, {
  foreignKey: 'category_id', 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};