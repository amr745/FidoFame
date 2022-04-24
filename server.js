// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const Fido = require("./models/fido");
const app = express();
require("dotenv").config();
// const DATABASE_URL = process.env.DATABASE_URL;

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json());

// Routes / Controllers
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

// app.get("/fidofame/new", (req, res) => {
    // res.render("new.ejs")
// });

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is listning on port: ${PORT}`))