const express  = require('express')
const ejs = require('ejs');
const app = express()
const path = require("path");

let renderRouter = require("../Routes/render.route.js");

app.use(express.json());

app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "../public/views"));

app.use("/", renderRouter);

module.exports = app