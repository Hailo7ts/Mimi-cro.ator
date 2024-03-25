const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt')

const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/mimi's-blog")

app.post('/login', (req, res) => {
    const {username, password} = (req.body)
    UserModel.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password is incorrect.")
            }
        }else{
            res.json('User name not registered.')
        }
    })
})

app.post('/register', (req, res) => {
    const {name, password} = req.body
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, password, hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
})

app.listen(5173, () => {
    console.log('server is runing')
})


