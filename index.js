const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 80;
const projectRoutes = require("./routes/project.route")
const messageRoutes = require("./routes/message.route")
const skillRoutes = require("./routes/skill.route");
const { connectToDb } = require('./db');

app.use(cors())
app.use(express.json())


app.use("/api/v1/project", projectRoutes)
app.use("/api/v1/message", messageRoutes)
app.use("/api/v1/skill", skillRoutes)


connectToDb()

app.get("/", (req, res) => {
    res.send("portfolio server is running")
})

app.listen(port)