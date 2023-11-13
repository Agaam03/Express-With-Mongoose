const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodo,
  deleteTodo,
  deleteAllTodo,
} = require("../controllers/todo-controller");
const verifyToken = require("../middleware/auth");

const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.post("/", createTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/", deleteAllTodo);
route.put("/:id", verifyToken, editTodo);

module.exports = route;
