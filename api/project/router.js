const express = require('express');

const projectFunc = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  projectFunc
    .find()
    .then((projects) => {
      res.json(projects);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to retrieve projects' });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;
  projectFunc
    .add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to create new project' });
    });
});
