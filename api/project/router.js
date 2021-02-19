const express = require('express');

const projectFunc = require('./model');

const router = express.Router();

//MIDDLEWARE
function checkPayload(req, res, next) {
  const { project_name } = req.body;
  if (project_name) {
    next();
  } else {
    res
      .status(400)
      .json({ message: 'Project name is required' });
  }
}

//ENDPOINTS
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

router.post('/', checkPayload, async (req, res) => {
  try {
    const projectData = req.body;
    const data = await projectFunc.add(projectData);
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Failed to create new project' });
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
