const express = require('express');

const resourceFunc = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  resourceFunc
    .find()
    .then((resources) => {
      res.json(resources);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to retrieve resources' });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;
  resourceFunc
    .add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;
