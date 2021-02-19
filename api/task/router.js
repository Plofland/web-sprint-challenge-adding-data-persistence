const express = require('express');

const taskFunc = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  taskFunc
    .find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to retrieve tasks' });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;
  taskFunc
    .add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'Failed to create new task' });
    });
});
