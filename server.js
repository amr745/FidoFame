// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const Fido = require("./models/fido.js")
const app = express();
require("dotenv").config();

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));

// Routes / Controllers
// New
app.get("/fidofame/new", (req, res) => {
    res.render("new.ejs")
});

// app.post("/fidofame", (req, res) => {
//     res.send(req.body)
// })

app.post("/fidofame", (req, res) => {
    // if (req.body.completed === "on") {
    //   //if checked, req.body.completed is set to 'on'
    //   req.body.completed = true
    // } else {
    //   //if not checked, req.body.completed is undefined
    //   req.body.completed = false
    // }
    Fido.create(req.body, (error, createdFido) => {
        res.send(createdFido)
    });
});

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));