const mongoose = require('mongoose')

const produitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    characteristics: {
        type: String,
        required: true,
    },

    photo: {
        type: String,

    },

})
mongoose.model("Produit", produitSchema)