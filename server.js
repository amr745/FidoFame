// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config();

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"))

// Routes / Controllers
const fidofameController = require("./controllers/fidofame")
app.use("/fidofame", fidofameController)

app.get("/", (req,res) => {
    res.redirect('/fidofame')
});

// Database Connection
mongoose.set('strictQuery', true);

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