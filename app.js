const express = require('express');
const cors = require('cors');

const app = express();;

const PORT = process.env.PORT || 3000

const allRoutes = require("./routes")
const db = require("./config/db")

db.then(() => {
    console.log("berhasi konek ke mongoDB")
})
.catch(() => {
    console.log("gagal konek ke mongoDB")
})

app.use(cors())
app.use(express.json())
//diambil dari index.js
app.use(allRoutes)

app.listen(PORT, () =>{
    console.log("server running on port " + PORT)
})