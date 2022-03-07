const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
    .then(dbCatagory => res.json(dbCatagory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbCatagory => {
      if(!dbCatagory){
        res.status(404).json({ message: 'No catagory found this with this id'});
        return;
      }res.json(dbCatagory);
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
      });


      
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
