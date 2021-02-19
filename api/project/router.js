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

router.post('/', async (req, res) => {
  try {
    const projectData = req.body;
    const data = await projectFunc.add(projectData)
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new project' });
  }

  // projectFunc
  //   .add(projectData)
  //   .then((project) => {
  //     res.status(201).json(project);
  //   })
  //   .catch(() => {
  //     res
  //       .status(500)
  //       .json({ message: 'Failed to create new project' });
  //   });
});

module.exports = router;
