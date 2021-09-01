const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "Hajer"



router.post('/customer/access/signup', (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email || !fullname || !password) {
        return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
        .then((SavedUser) => {
            if (SavedUser) {
                return res.status(422).json({ error: "user already exists withthat email" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        fullname,
                        email,
                        password: hashedpassword,
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "saved successfully" })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/customer/access/signin', (req, res) => {
    const {
        email,
        password
    } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "please add email or password" })
    }
    User.findOne({
        email: email
    })

    .then(savedUser => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email or password" })
        }
        bcrypt.compare(password, savedUser.password)
            .then(doMatch => {
                if (doMatch) {
                    //res.json({ message: "sucessfully signed in" })
                    const token = jwt.sign({ _id: savedUser._id },
                        JWT_SECRET)
                    const { _id, name, email } = savedUser
                    res.json({ token, user: { _id, name, email } })

                } else {
                    return res.status(422).json({ error: "Invalid email or password" })
                }
            })
            .catch(err => {
                console.log(err)
            })



    })
})




module.exports = router