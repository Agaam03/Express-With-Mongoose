const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodo,
  deleteTodo,
  deleteAllTodo,
} = require("../controllers/todo-controller");

const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.delete("/:id", deleteTodo);
route.delete("/", deleteAllTodo);
route.put("/:id", editTodo);

module.exports = route;
