const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find().populate("userId", ["name", "email"]);

      res.status(200).json({
        message: "Berhasil mendapatkan todo",
        data: todos,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal Melihat All Todo",
      });
    }
  },
  getTodoById: async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findById(id).populate("userId", ["name", "email"]);
      res.status(200).json({  
        message: "Berhasil mendapatkan todo by id",
        data: todo,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  createTodo: async (req, res) => {
    try {
      let data = req.body;
      await Todo.create(data);
      res.status(200).json({
        message: "Berhasil membuat data todo",
      });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  },
  editTodo: async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (todo) {
            res.status(200).json({
                message: "Berhasil mengedit data todo",
                data: todo
              });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  },
  deleteTodo: async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (todo) {
            res.status(200).json({
                message: "Berhasil menghapus data todo by id",
                data: todo
              });
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  },
  deleteAllTodo: async (req, res) => {
    try {
        const todo = await Todo.deleteMany();
        if (todo.deletedCount > 0) {
            res.status(200).json({
                message: "Berhasil menghapus semua data todo",
                data: todo
              });
        } else {
            res.status(404).json({ message: 'No todos to delete' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  },
};
