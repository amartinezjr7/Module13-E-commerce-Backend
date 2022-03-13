const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include:{
      model: Product,
      attributes: ['product_name', 'price','stock', 'category_id']
    }
  })
    .then(dbTag => res.json(dbTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include:{
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbTag => {
      if(!dbTag) {
        res.status(404).json({ message: 'No tag with this id'});
        return;
      }res.json(dbTag);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);  
  });
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  }).then(dbTag => res.json(dbTag))
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTag =>{
      if(!dbTag[0]){
        res.status(404).json({message:'No tag with this id'});
        return;
      }
      res.json(dbTag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTag => {
      if(!dbTag) {
        res.status(404).json({ message: 'No tag found with this id'});
        return;
      }
      res.json(dbTag);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});

module.exports = router;
