const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title, completed = false } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title,
    completed
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
