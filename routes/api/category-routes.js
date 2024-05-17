const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.json(categoryData)
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOneId({
    where: {
      id: req.params.id
    },
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.bulkCreate([
    {
      name: 'Electronics',
      description: 'Television and Computer',
      id: '1a2b3c'
    },
    {
      name: 'Books',
      description: 'Horror and Sci-fi',
      id: '4d5e6f'
    },
    {
      name: 'Clothing',
      description: 'Apparel for men, women, and kids',
      id: '7h8i9j'
    }
  ])
  .then(() => {
    res.status(201).send('Categories created successfully');
  })
  .catch(error => {
    res.status(500).send('Error creating categories: ' + error.message);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      name: req.body.name,
      description: req.body.description,
      id: req.body.id,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
  .then((categoryData) => {
    // Sends the updated book as a json response
    res.json(categoryData);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  
});

module.exports = router;