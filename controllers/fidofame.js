// Dependencies
const express = require("express");
const fidoRouter = express.Router();
const Fido = require("../models/fido");

// Routes / Controllers
// Seed
const fidoSeed = require("../models/fidoSeed.js")
fidoRouter.get("/seed", (req, res) => {
  Fido.deleteMany({}, (error, allFido) => {})

  Fido.create(fidoSeed, (error, data) => {
    res.redirect("/fidofame")
  })
});

// Index
fidoRouter.get("/", (req,res) => {
    Fido.find({}, (error, allFidos) => {
        res.render("index.ejs", {
            fidos: allFidos,
        })
    })
});

//Film
fidoRouter.get("/film", (req,res) => {
    Fido.find({}, (error, allFidos) => {
         res.render("film.ejs", {
             fidos: allFidos,
        })
    })
});

//TV
fidoRouter.get("/tv", (req,res) => {
    Fido.find({}, (error, allFidos) => {
         res.render("tv.ejs", {
             fidos: allFidos,
        })
    })
});

//Cartoon
fidoRouter.get("/cartoon", (req,res) => {
    Fido.find({}, (error, allFidos) => {
         res.render("cartoon.ejs", {
             fidos: allFidos,
        })
    })
});

//Social Media
fidoRouter.get("/social", (req,res) => {
    Fido.find({}, (error, allFidos) => {
         res.render("social.ejs", {
             fidos: allFidos,
        })
    })
});

// New
fidoRouter.get("/new", (req, res) => {
    res.render("new.ejs")
});

//Delete
fidoRouter.delete("/:id", (req, res) => {
    Fido.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/fidofame")
    })
});

// Update
fidoRouter.put("/:id", (req, res) => {
    if (req.body.deceased === "on") {
      req.body.deceased = true
    } else {
      req.body.deceased = false
    }
    Fido.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        },
        (error, updatedBook) => {
            res.redirect(`/fidofame/${req.params.id}`)
        }
    )
});

// Create
fidoRouter.post('/', (req, res) => {
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
fidoRouter.get("/:id/edit", (req, res) => {
    Fido.findById(req.params.id, (error, foundFido) => {
        res.render("edit.ejs", {
            fido: foundFido,
        })
    })
});

// Show
fidoRouter.get("/:id", (req, res) => {
    Fido.findById(req.params.id, (err, foundFido) => {
        res.render("show.ejs", {
            fido: foundFido
        })
    })
});

fidoRouter.get("/", (req,res) => {
    res.redirect('/fidofame')
});

module.exports = fidoRouter