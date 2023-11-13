const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  deleteAllUser,
  editUser,
  getUserTodos,
} = require("../controllers/user-controller");
const verifyToken = require("../middleware/auth");

const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/todos", verifyToken, getUserTodos);
route.post("/", createUser);
route.delete("/:id", deleteUser);
route.delete("/", deleteAllUser);
route.put("/:id", editUser);

module.exports = route;
