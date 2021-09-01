const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Produit = mongoose.model("Produit")



router.post('/customer', (req, res) => {
    const { name, characteristics, photo } = req.body;
    if (!name || !characteristics || !photo) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    Produit.findOne({ name: name })
        .then((SavedProduit) => {
            if (SavedProduit) {
                return res.status(422).json({ error: "user already exists withthat email" })
            }

            const produit = new Produit({
                name,
                characteristics,
                photo,
            })
            produit.save()
                .then(produit => {
                    res.json({ message: "saved successfully" })
                })
                .catch(err => {
                    console.log(err)
                })

        })
        .catch(err => {
            console.log(err)
        })

})






module.exports = router