// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const Fido = require("./models/fido");
const app = express();
require("dotenv").config();
const methodOverride = require("method-override")

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"))

// Routes / Controllers

// Seed
const fidoSeed = require("./models/fidoSeed.js")

app.get("/fidofame/seed", (req, res) => {
  Fido.deleteMany({}, (error, allFido) => {})

  Fido.create(fidoSeed, (error, data) => {
    res.redirect("/fidofame")
  })
})

// Index
app.get("/fidofame", (req,res) => {
    Fido.find({}, (error, allFidos) => {
        res.render("index.ejs", {
            fidos: allFidos,
        })
    })
});

// New
app.get("/fidofame/new", (req, res) => {
    res.render("new.ejs")
});

//Delete
app.delete("/fidofame/:id", (req, res) => {
    Fido.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/fidofame")
    })
})

// Create
app.post('/fidofame', (req, res) => {
    req.body.deceased = !!req.body.deceased;
    Fido.create(req.body, (err, createdFido) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/fidofame');
        }
    })
});

// Edit
app.get("/fidofame/:id/edit", (req, res) => {
    Fido.findById(req.params.id, (error, foundFido) => {
        res.render("edit.ejs", {
            fido: foundFido,
        })
    })
})

// Show
app.get("/fidofame/:id", (req, res) => {
    Fido.findById(req.params.id, (err, foundFido) => {
        res.render("show.ejs", {
            fido: foundFido
        })
    })
});

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`));