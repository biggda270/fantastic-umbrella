const router = require('express').Router();
const { Model } = require('sequelize/types');
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Category.findAll({
    include: [
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      attributes: ['id', 'tag_name'],
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
