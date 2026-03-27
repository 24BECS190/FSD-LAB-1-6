const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, name: "Learn React" },
  { id: 2, name: "Learn Express Lab" }
];

// GET API
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST API
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.name
  };
  tasks.push(newTask);
  res.json(newTask);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});