const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Produit = mongoose.model("Produit");


router.get("/suivie", (req, res) => {
    Produit.find()
        .then(resultat => res.json(resultat))
})


router.get("/suivie", (req, res) => {
    User.find()
        .then(resultat => res.json(resultat))
})

module.exports = router;