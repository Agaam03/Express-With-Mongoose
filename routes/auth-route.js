const express = require('express');
const { login, regis } = require('../controllers/auth-controller');
const route = express.Router()

route.post("/login", login)
route.post("/regis", regis)

module.exports = route