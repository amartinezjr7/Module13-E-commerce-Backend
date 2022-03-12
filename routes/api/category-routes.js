const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model:Product,
      attributes: ['id', 'product_name','price','stock', 'category_id']
    }
  })
    .then(dbCatagory => res.json(dbCatagory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include:{
      model:Product,
      attributes:['id', 'product_name', 'price','stock', 'category_id']
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
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCatagory =>{
    res.json(dbCatagory)
  }).then(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCatagory => {
    if(!dbCatagory){
      res.status(404).json({message:'No catagory found with this id'});
      return;
    }
    res.json(dbCatagory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCatagory =>{
    res.status(404).json({message:'No category found with this id'});
    return;
  })
  res.json(dbCatagory);
}).catch(err =>{
  console.log(err);
  res.status(500).json(err);
});

module.exports = router;
